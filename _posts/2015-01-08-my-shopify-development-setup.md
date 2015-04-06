---
layout: post
title: "My Shopify Development Setup - Windows"
description: ""
category: programming
tags: [programming, shopify]
---
{% include JB/setup %}

At the company I work for, I've been in charge of maintaining a Shopify site for a while. Someone else did the original work and then decided the project was too boring to maintain, so I took over from there. I've been maintaining it for about 6 months now. I had two options for editing the themes: using the in-browser editor provided by Shopify to edit the html, css and js files, or I could edit them locally and have to copy and paste the edits into the Shopify editor. Neither were particularly attractive solutions. In the 6 months I've maintained it, I've maybe twice googled "Git push to Shopify Theme" or something similar, but I never took the time to actually set up a way to do anything like that.

We've just decided to opened up a second store and in the last couple of days I decided I would finally set it up so that I could edit my files locally and have them automatically updated. I've come here to describe how I did that step by step so that other Windows-using Shopify theme editors can do the same.

### First, let me explain what my needs were:

Shopify allows for 2 published themes: a Desktop theme and a Mobile theme. They also allow for a number of unpublished themes that can be previewed without being seen by users. What I have set up (and had set up prior to all this, even when I was still copying and pasting into Shopify) is a git repo with each branch corresponding to one installed theme. It was important to me that I maintained this, because I liked being able to make an edit to my Desktop theme and do a simple git cherry-pick to apply those changes to the Mobile theme as well.

I remember seeing some solutions that allowed a developer to do a git-push to the master branch which would then update a theme; the problem with that is that, being forced to use the master branch, I'd have to have a separate repo for each theme. Git cherry-picks are not as easy between repos as they are between branches within the same repo, so that wasn't a very attractive option to me.

I found that a popular solution is using the [shopify_theme](https://github.com/Shopify/shopify_theme) gem. So I open up cmd, type `gem install shopify_theme` and I found out I don't have Ruby installed; it doesn't come out of the box with Windows. 

The gem requires Ruby 1.9; [get it here](http://rubyinstaller.org/downloads/). Once that was installed, I tried `gem install shopify_theme` again. This time I got an error about cURL not being installed, if I remember correctly. Download a binary for your system [here](http://curl.haxx.se/download.html).

So after I got cURL installed, I set up my directory structure like so:

<div class="highlight"><pre><code class="language-text" data-lang="text"
><span class="sd">site_name/</span>
└── <span class="sd">theme/</span></code></pre></div>

I initialize a Git repo with `site_name` as the root folder. Then in cmd I cd into `theme`. In `theme` will be all of my Shopify theme files and folders, of course. I enter `theme configure {api_key} {password store_url}`. All fine and dandy. A file called `config.yml` is created. Looks fine, so I type `theme download` and ... another error.

Turns out I need a new environment variable called `SSL_CERT_FILE` pointing to a file with [all this stuff](http://curl.haxx.se/ca/cacert.pem) in it. I don't know anything about SSL, but I willingly oblige. [Here's](http://www.computerhope.com/issues/ch000549.htm) a guide to creating new environment variables in Windows. I put the `cacert.pem` file somewhere I expected it to stay undisturbed and put that location as the value for my environment variable.

I tried `theme download` again, and it worked! That left me with the following structure:

<div class="highlight"><pre><code class="language-text" data-lang="text"
><span class="sd">site_name/</span>
├── <span class="sd">theme/</span>
|   ├── <span class="sd">assets/</span>
|   ├── <span class="sd">templates/</span>
|   ├── <span class="sd">layouts/</span>
|   ├── <span class="sd">snippets/</span>
|   ├── <span class="sd">... all other Shopify theme folders .../</span>
|   └── <span class="k">config.yml</span>
└── <span class="k">.gitignore</span></code></pre></div>

I went into `config.yml` and changed the `theme_id` value to that of my main theme. You can find that by going to your Shopify theme editor and clicking on `Edit HTML/CSS` for the relevant theme. The theme id is in the url; the number at the end.

I then commit all of that as my first commit for that theme.

I go into the Shopify theme editor and duplicate the theme, renaming it `mobile`. I then make a new branch for my other theme, naming it `mobile`. I `git checkout` into that branch and change the config.yml `theme_id` variable again to correspond to the `mobile` theme.

Now going to the `theme/` folder in cmd, I can type `theme watch` and any time I save a change to a file, it's uploaded immediately to the appropriate theme. I have to be careful not to switch branches while `theme watch` is running (if you only use git on the commandline, it's something you don't have to worry about - I use SourceTree). 

I can now easily cherry pick between branches. I can also duplicate a theme on Shopify and very quickly create a new git branch locally, and all I have to do to sync them is change the `theme_id` variable. It's created a workflow immensely quicker than what I was doing before.

It's possible to create a setup that only pushes changes to Shopify when you commit to git; it waits for you to make a new commit, then does `theme upload {file-name.ext}` for every file you changed in that commit. Or perhaps it can involve a webhook with a GitHub repo. I'm not sure what the best way would be. At first I thought I'd prefer that, but I think I prefer it just updating when I save. That way I don't litter my commit history with changes that are immediately reverted.

So, I've created a Shopify dev setup that I'm mostly happy with. I'm also pleased to announce that this same project has finally pushed me onto the SASS train. Given Shopify's support for .scss files, I've finally decided to take the plunge. And I love it!

<aside class="alert-danger">Make sure if you're committing your shopify_theme config.yml that you're doing so in a private repo.</aside>
