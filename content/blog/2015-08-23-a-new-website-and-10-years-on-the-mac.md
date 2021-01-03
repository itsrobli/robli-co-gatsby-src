---
title: A new website and 10 years on the Mac
description: "I made a new website. I wrote about it. Yeah."
date: 2015-08-23 17:14
author: "Rob Li"
tags:
- writing
- tech
---

## A new website

Steve Jobs [once said][1]:

> You’ve got to start with the customer experience and work backwards to the technology.

I believe this is the right approach to doing most things. Start  by thinking about the outcome you want, then figure out the how. The common mistake is to instead look at the skills and resources available, then figure out what can be created given those constraints.

I had 3 goals for this new website. 

1. I want the site to be fast. 
2. I want it to be cheap to run. 
3. I want all my [stuff][2] to live in a central hub I control. 

---- 

## 10 years on the Mac

The Macintosh is an example of a product where the people who made it first thought about the outcome, the user experience, then figured out the technology (like [rounded rects][3]) that were required to get there.

The process of building this website reminded me of all the reasons why I love the Mac. All the tools I need are easily available - either pre-installed, or a simple `brew install $WHATEVER` [command][4] away.

For example, OS X runs on top of Unix. The open web is usually some flavour of Unix[^1]. Developing for the web on the Mac is a joy because most concepts and commands are the same (e.g. file systems, permissions, tools like `rsync`). Everything feels native and familiar. When I open up the Mac terminal app and SSH into my web server it’s the same environment I’m familiar with on my Mac. [Ruby][5], [Apache][6], ￼[Bash][7]￼…it’s just all there and it’s all the same.

The past 10 years on the Mac have been the most creative of my life simply because there is so much support out there for making things on the Mac. Beyond the tutorials, the available apps are best of breed and usually open-source. I learned photography, video editing and programming all on the Mac.

I hope the Mac and OS X continue to evolve and stay true to themselves[^2].

---- 

## It’s just some implementation detail, don’t worry about it…

Execution [is everything][8].

This site is far from great. But I believe a lot of the fundamental architecture and design decisions are *ok*.

### Solving for outcome 1 - speed

The problem with the web in 2015 is it’s slow and bloated. Many popular sites are full of ads and tracking that make pages load slowly, suck your phone battery dry and blast noise from autoplaying videos you don’t want to watch.

You can see below from a simple test I did on the [SMH][9] homepage I found 22 trackers active - a lot of them are advertising related. These trackers each fire off their own scripts and make additional network requests - often running long after the main webpage has loaded - chewing up battery life unnecessarily.

[![][image-1]][10]

I did two things to tackle this problem.

#### Scripts

Firstly, this site runs as little JavaScript as possible. This is an easy decision for me because I don’t need to make money off this site.

I do run some JavaScript where it’s needed. However, I do not put any scripts in the `<header>` of the HTML because I don’t want anything taking priority over the rendering of the content.

I like to use footnotes in my blogs to add little bits of info[^3] but I don’t like the traditional method of linking to footnotes at the bottom of an article. It makes for a bad reading experience to have to jump up and down within an article. I use [bigfoot][11] to show the footnotes in a pop-up. The traditional footnotes are still at the bottom. As with any JavaScript library, [jQuery][12] is also required. What can you do[^4].

In addition, I also run [Google Analytics][13][^5] to track what’s happening on this site. You can read about some of the privacy implications [here][14].

#### Static site

A lot of blogs use a CMS like [Wordpress][15]. I like Wordpress. My [previous effort][16] ran on Wordpress and I have been using it for almost 10 years. The problem with Wordpress is that I believe a CMS is overkill for a blog. There is no need for a server to put together a blog post for the user every time a page is requested. The page is going to be the same for every visitor!

Building once and serving the same page to everyone is a better approach for a site like mine. This way, my server[^6] is only sending raw HTML/CSS/JavaScript to each request which is retrieved directly from the server’s file system. This minimises work done by the server which speeds up the overall request/response cycle. As a side benefit, this also bypasses many security issues that can arise from having a database backend.

*But* I don’t want to craft every single page like an animal - programming can help with that.

I built this site using [Middleman][18] which is a static site generator. It programatically pieces together each page and every possible permutation of a page. That way, I can build once and then deploy.

Middleman is quite capable so far, easy to use[^7] and very customisable. It has dedicated blogging tools and plenty of modules to add-on functionality later. 

Some tidbits about the design:

- I designed the site from the ground up and wrote a lot of custom CSS to get it looking how I wanted. The foundation is [Bootstrap][19] so I didn’t have to worry too much about mobile vs desktop rendering and sizes.
- Why orange? I wanted the background to be white because I wanted images to blend easily into the page. I didn’t want the usual boring blue highlight colours so I opted for orange which goes well with white, I think.

As a great side benefit of the static site approach, it means there is significantly less demand on the server’s resources and hence only minimum computing power is required bringing down costs and brings me to the next outcome required…

### Solving for outcome 2 - server running costs

My choice in using a static site also results in minimum server requirements. 

I am using a [VPS][20] that costs $5/month with 512MB of memory and uses SSDs for storage. SSDs are fairly cheap now in a VPS environment, and given the limited memory, the storage performance must be top notch.

The VPS also hosts all my other content from the [robertwli.com][21] and robli.org domains.

### Solving for outcome 3 - central hub

I find the web is moving to a place where everyone’s content is stored and owned by private companies like Facebook, Google and Apple. This in itself is not a bad thing. They provide great services.

I am a believer in the power of the open web. A web where you control, store and serve your own content over the internet.

#### My projects

My [About][22] page lists all the stuff I have worked on past and present. Hopefully, I will keep adding to this page as I tackle new projects.

[![][image-2]][23]

#### My photos

I also finally have a [place for my photos][24] that I’m fairly happy with. Ironically, I started to learn programming because I was not happy with any of the templates the typical photo portfolio websites offered. After getting side-tracked with programming for 2 years, I circled back to the original task.

I will be adding progressively to this as well.

<img class="img-hero" src="/images/2015/08/roblico-photos-section-combined.jpg" />



[^1]:	usually linux

[^2]:	Afterall, it’s the existence of the Mac that allows the next generaiton of computing devices like iOS devices to have the freedom to stay simple and be true to themselves.

[^3]:	like this

[^4]:	On the bright side, chances are you already have 4 different versions of jQuery cached on your computer.

[^5]:	Why? I don’t know, I guess I like to know what’s going on with the site.

[^6]:	just a bare bones Linux box somewhere in [Digital Ocean’s][17] farm.

[^7]:	if you’re experienced with the Ruby/Rails conventions

[1]:	https://youtu.be/FF-tKLISfPE?t=1m46s
[2]:	/about/
[3]:	http://www.folklore.org/StoryView.py?story=Round_Rects_Are_Everywhere.txt
[4]:	http://brew.sh
[5]:	https://www.ruby-lang.org/en/
[6]:	http://httpd.apache.org
[7]:	https://en.wikipedia.org/wiki/Bash_(Unix_shell)
[8]:	http://robli.co/2014/10/12/Executing-on-the-vision/
[9]:	http://smh.com.au
[10]:	http://robli.co/images/2015/08/smh-trackers.png
[11]:	http://www.bigfootjs.com
[12]:	https://jquery.com
[13]:	http://www.google.com.au/analytics/
[14]:	/privacy/
[15]:	https://wordpress.org
[16]:	http://robertwli.com
[17]:	https://www.digitalocean.com
[18]:	https://middlemanapp.com
[19]:	http://getbootstrap.com
[20]:	http://digitalocean.com/
[21]:	http://robertwli.com/
[22]:	/about/
[23]:	http://robli.co/images/2015/08/roblico-about-section.png
[24]:	/photos/
[25]:	http://robli.co/images/2015/08/roblico-photos-section-combined.jpg

[image-1]:	http://robli.co/images/2015/08/smh-trackers.png
[image-2]:	/images/2015/08/roblico-about-section.png