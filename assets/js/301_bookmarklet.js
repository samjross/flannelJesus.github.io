/**
 Copyright (c) 2015, Samuel Ross
 All rights reserved.

 Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
 following conditions are met:

 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
    disclaimer.

 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following
    disclaimer in the documentation and/or other materials provided with the distribution.

 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote
    products derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
(function () {

    shopifyRedirects = {
        /**
         * @param {?number} pageNum
         * @param cb
         * @callback cb
         */
        getPage: function (pageNum, cb) {
            $.get('/admin/redirects.json', {limit: 250, page: pageNum}, function (data) {
                cb(data.redirects);
            });
        },
        /**
         * @param cb
         * @callback cb
         */
        getAllPages: function (cb) {
            // @type {Object[]}
            var redirects = [];
            var recursiveGet = function (page) {
                if (!page) {
                    page = 1;
                }
                shopifyRedirects.getPage(page, function (data) {
                    redirects = redirects.concat(data);
                    if (data.length === 250) {
                        recursiveGet(page + 1);
                    } else {
                        cb(redirects);
                    }
                });
            };
            recursiveGet(0);
        },

        /**
         * @param {string} oldUrl
         * @param {string} newUrl
         * @returns {*} jqXHR object (promise-like)
         */
        submitRedirect: function (oldUrl, newUrl) {
            var redirect = {"redirect": {"path": oldUrl, "target": newUrl}};
            return $.post('/admin/redirects.json', redirect);
        },

        deleteRedirect: function (id) {
            var url = `/admin/redirects/${id}.json`;
            return $.ajax({
                url: url,
                type: 'DELETE'
            });
        },

        initializeUI: function () {
            var html = `<div id="modal_container" refresh="modal" class="modal bulk_redirects" style="display:block">
                <div><header>
                  <h2>Bulk Redirects</h2>
                  <a href="#" class="close-modal">×</a>
                </header>

                <form accept-charset="UTF-8" id="bulk_redirects">
                  <div class="body">
                    <div class="ssb">
                      <label for="redirect_path">Redirects</label>
                      <div class="next-grid next-grid--no-padding">
                        <div class="next-grid__cell">
                          <textarea id="redirect_path" name="redirect[path]" placeholder="/old-path/old.php /new/path"></textarea>
                        </div>
                      </div>
                      <span class="block note redirect-helper-text">old url, then new url, separated by spaces</span>
                    </div>
                  </div>
                  <div class="buttons">
                    <button class="btn btn-primary js-btn-loadable has-loading" id="submit">Submit Redirects</button>
                    <button class="btn btn-purchase js-btn-loadable has-loading" id="get_existing">Get Existing</button>
                    <button class="btn btn-destroy-no-hover js-btn-loadable has-loading" id="delete_all">Delete All</button>
                    <a class="btn close-modal" href="#">Cancel</a>
                  </div>
                </form></div></div>
                <div id="modal_backdrop" refresh="modal" class="modal-bg visible"></div>`;

            $('body').append(html);

            $('.bulk_redirects').on('click', 'a.close-modal', function (e) {
                var container = $(this).closest('#modal_container');
                container.next().remove();
                container.remove();
            });

            var populateExistingRedirects = function (cb) {
                shopifyRedirects.getAllPages(function (redirects) {
                    var result = '';
                    redirects.forEach(function (element, index, array) {
                        result += `${element.path} ${element.target}\n`
                    });
                    $('.bulk_redirects textarea#redirect_path').val(result);
                    cb(redirects);
                });
            };

            $('.bulk_redirects button#delete_all').click(function (e) {
                e.preventDefault();
                var confirmed = window.confirm("Are you sure you'd like to delete all the redirects? Don't worry too much -- you're old redirects will be put in the text box for you to save");
                if (!confirmed) {
                    return false;
                }
                $(this).addClass('is-loading');
                $(this).closest('.buttons').find('#submit, #get_existing')
                    .addClass('disabled').prop('disabled', true);
                $(this).closest('.buttons').find('a.close-modal')
                    .removeClass('close-modal').addClass('stop');
                var stop = false;
                $('.bulk_redirects').on('click', 'a.stop', function (e) {
                    e.preventDefault();
                    stop = true;
                });
                $('.ssb label').eq(0)
                    .after(`<label id="redirect_progress">...retrieving existing redirects...</label>`);
                populateExistingRedirects(function (redirects) {
                    var redirectCount = redirects.length;
                    var deleteItem = function(index){
                        var r = redirects[index];
                        var jq = shopifyRedirects.deleteRedirect(r.id);
                        jq.always(function(){
                            $('.ssb #redirect_progress').text(`${index+1} of ${redirectCount}`);
                            if (index === redirectCount - 1 || stop) {
                                $('.bulk_redirects #delete_all').removeClass('is-loading');
                                $('.bulk_redirects .buttons').find('#submit, #get_existing')
                                    .removeClass('disabled').prop('disabled', false);
                                $('.ssb #redirect_progress').remove();
                            } else {
                                deleteItem(index + 1);
                            }
                        });
                    };

                    deleteItem(0);

                });
            });

            $('.bulk_redirects button#get_existing').click(function (e) {
                e.preventDefault();
                $(this).addClass('is-loading');
                $(this).closest('.buttons').find('#submit, #delete_all')
                    .addClass('disabled').prop('disabled', true);
                populateExistingRedirects(function () {
                    $('.bulk_redirects .buttons').find('#submit, #delete_all')
                        .removeClass('disabled').prop('disabled', false);
                    $('.bulk_redirects .buttons #get_existing').removeClass('is-loading');
                });
            });

            $('.bulk_redirects button#submit').click(function (e) {
                e.preventDefault();

                $(this).addClass('is-loading');
                $(this).closest('.buttons').find('#get_existing, #delete_all')
                    .addClass('disabled').prop('disabled', true);
                $(this).closest('.buttons').find('a.close-modal')
                    .removeClass('close-modal').addClass('stop');
                var stop = false;
                $('.bulk_redirects').on('click', 'a.stop', function (e) {
                    e.preventDefault();
                    stop = true;
                });

                var lines = $('.bulk_redirects textarea#redirect_path').val().split('\n');
                var lineCount = lines.length;
                var successes = [];
                var failures = [];

                var renderRedirects = function (sof) {
                    var finalString = '';
                    sof.forEach(function (element, index, array) {
                        finalString += element + '\n';
                    });
                    return finalString;
                };

                var newHtml = `<div class="ssb">
                      <label for="successes">Successes</label>
                      <div class="next-grid next-grid--no-padding">
                        <div class="next-grid__cell">
                          <textarea id="successes" name="redirect[path]"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="ssb">
                      <label for="failures">Failures</label>
                      <div class="next-grid next-grid--no-padding">
                        <div class="next-grid__cell">
                          <textarea id="failures" name="redirect[path]"></textarea>
                        </div>
                      </div>
                      <span class="block note redirect-helper-text">
                        A common reason for failure is that the old url has already been assigned a 301
                      </span>
                    </div>`;
                $('form#bulk_redirects .body').html(newHtml);

                $('.ssb label').eq(0)
                    .before(`<label id="redirect_progress">...preparing...</label>`);

                var submitLine = function (index) {
                    var paths = lines[index].split(/[\s\t]+/);
                    var oldPath = paths[0];
                    var newPath = paths[1];

                    var jq = shopifyRedirects.submitRedirect(oldPath, newPath);
                    jq.done(function () {
                        // put path pair into Success table
                        console.log('success', paths);
                        successes.push(`${oldPath} ${newPath}`);
                        $('#successes').text(renderRedirects(successes));
                    });
                    jq.fail(function () {
                        // put path pair into Fail table
                        console.log('fail', paths);
                        failures.push(`${oldPath} ${newPath}`);
                        $('#failures').text(renderRedirects(failures));
                    });
                    jq.always(function () {
                        $('.ssb #redirect_progress').text(`${index+1} of ${lineCount}`);
                        if (index === lineCount - 1 || stop) {
                            var container = $('.bulk_redirects');
                            container.find('#get_existing, #delete_all').remove();
                            container.find('a.stop').removeClass('stop').addClass('close-modal').text('Close');
                            container.find('#submit').removeClass('btn-primary').removeClass('is-loading')
                                .addClass('btn-purchase').text('DONE').prop('disabled', true);
                            $('.ssb #redirect_progress').remove();
                        } else {
                            submitLine(index + 1);
                        }
                    });
                };

                submitLine(0);
            });
        }
    };

    shopifyRedirects.initializeUI();
})();
