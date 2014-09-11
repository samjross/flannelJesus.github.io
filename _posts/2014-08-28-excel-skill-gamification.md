---
layout: post
title: Excel Skill Gamification
published: True
categories: []
tags: [gamification]
---

I've been interested in gamification for a long time. Before HabitRPG came out, I didn't know of any good tools for gamification, but I was excellent with Excel, so I made a little Excel progress tracker, and treated it like an Experience bar. 

In RPGs, after you defeat an enemy you see your experience go up; there's a lot of pleasure in that. This is what I wanted.

![excel gamification]({{ site.url }}/assets/images/excelexp.jpg)


I'll risk belaboring the obvious for the sake of full clarity:

You can clearly see that each row is labeled as a Chapter. Each square (either grey or colored) to the right of those labels corresponds to a section within each chapter. Colored represents a completed section while grey represents incomplete.

The percentage to the right is the percentage of all of those squares which are colored, and obviously the green 'progress bar' corresponds to that.

Here's how it's all done behind the scenes: each 'section' cell contains a number -- it contains the number 0 if it's incomplete, or if it's complete I've chosen to give it the number of the chapter it's in (eg each copmlete section in Ch. 2 would have the number 2). I've defined a custom format for the cell values which makes them invisible -- that custom format is simply "". The empty string. This hides the value of the cell.

I've applied conditional formatting to the cells: if the value == 0, it is grey. If it is > 0, I've defined a 2-value gradient (you could go simpler and just have everything that's not a 0 be the same color, but I like the gradient). In this case, the color starts at Fuschia from 1 and goes to Blue at 19.

Now the percentage formula is quite simple: first you make a named range that contains all those section cells (in my case, I've called it PyBlocks). The formula looks like this: =COUNTIF(PyBlocks;">0")/COUNT(PyBlocks). It counts the number of cells that have a value > 0 and divides it by the number of cells that aren't empty. The cell is given the 'percentage' format.

The progress bar has the value of the cell above it, the percentage cell. To hide the percentage, I've given it the custom format of the empty string again. I use Excel's built-in progress bar format: select the cell > Conditional Formatting > New Rule > Data Bar. Change the minimum to Number, 0. Change the maximum to Number, 1.

![excel progress bar settings]({{ site.url }}/assets/images/progressbar.jpg)		

I have dozens of sheets in my workbork corresponding to reading material, video tutorials, etc. that I'm either working on or done with. It encourages me to keep working and it serves as a bookmark for things that I can't easily bookmark otherwise. It has served me well, and I continue to use it in conjunction with other tools like HabitRPG.

<p>I’ve uploaded the example file <a href="https://www.dropbox.com/s/bvbgerj2nlw72w6/progress_example.xlsx?dl=0">here <i class="glyphicon glyphicon-file"></i></a>.</p>
