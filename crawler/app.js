// app.js
"use strict";

var app = angular.module('crawler',[]);

var test_data = {
                  "edges": [
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/", 
                      "had_keyword": false, 
                      "id": 5824, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/admissions/static/corvallis/#.Va2SRcZVhkI", 
                      "had_keyword": false, 
                      "id": 5825, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://main.oregonstate.edu/official-web-disclaimer", 
                      "had_keyword": false, 
                      "id": 5826, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://ecampus.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5827, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/faculty/", 
                      "had_keyword": false, 
                      "id": 5828, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://osucascades.edu/feature-story/osu-campus-opens-bend", 
                      "had_keyword": false, 
                      "id": 5829, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://summer.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5830, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://seagrant.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5831, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/current/", 
                      "had_keyword": false, 
                      "id": 5832, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/alumni/", 
                      "had_keyword": false, 
                      "id": 5833, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/ua/ncs/archives/2016/oct/osu-dads-and-moms-weekends-become-family-weekends", 
                      "had_keyword": false, 
                      "id": 5834, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://main.oregonstate.edu/people-search", 
                      "had_keyword": false, 
                      "id": 5835, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/future/", 
                      "had_keyword": false, 
                      "id": 5836, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://pace.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5837, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/ua/ncs/", 
                      "had_keyword": false, 
                      "id": 5838, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/terra/", 
                      "had_keyword": false, 
                      "id": 5839, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://calendar.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5840, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://calendar.oregonstate.edu/event/116673/", 
                      "had_keyword": false, 
                      "id": 5841, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://beavernation.is/thenation/jessup/", 
                      "had_keyword": false, 
                      "id": 5842, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://main.oregonstate.edu/home-away-home", 
                      "had_keyword": false, 
                      "id": 5843, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://main.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5844, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/campusmap/", 
                      "had_keyword": false, 
                      "id": 5845, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu", 
                      "had_keyword": false, 
                      "id": 5846, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://osulibrary.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5847, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://marinestudies.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5848, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "https://instagram.com/oregonstate", 
                      "had_keyword": false, 
                      "id": 5849, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://osubeaverstore.com/", 
                      "had_keyword": false, 
                      "id": 5850, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "https://www.facebook.com/osubeavers", 
                      "had_keyword": false, 
                      "id": 5851, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "/alumni/", 
                      "had_keyword": false, 
                      "id": 5852, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/about/", 
                      "had_keyword": false, 
                      "id": 5853, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "https://twitter.com/oregonstate", 
                      "had_keyword": false, 
                      "id": 5854, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://sungrant.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5855, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://osuseafoodlab.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5856, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://hmsc.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5857, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://coralreefmovie.org/", 
                      "had_keyword": false, 
                      "id": 5858, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://main.oregonstate.edu/digital-millennium-copyright-act-contact-information", 
                      "had_keyword": false, 
                      "id": 5859, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://www.osubeavers.com/", 
                      "had_keyword": false, 
                      "id": 5860, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://spacegrant.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5861, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://research.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5862, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/extension-outreach/", 
                      "had_keyword": false, 
                      "id": 5863, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://communications.oregonstate.edu/webform/contact-osu", 
                      "had_keyword": false, 
                      "id": 5864, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://fic.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5865, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/portland/", 
                      "had_keyword": false, 
                      "id": 5866, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://beavernation.is", 
                      "had_keyword": false, 
                      "id": 5867, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:36 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonprogress.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5868, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/admissions/", 
                      "had_keyword": false, 
                      "id": 5869, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/accessibility/", 
                      "had_keyword": false, 
                      "id": 5870, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://studentlife.oregonstate.edu/parents/", 
                      "had_keyword": false, 
                      "id": 5871, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/ua/ncs/archives/2016/oct/bushmeat-hunting-threatens-mammal-populations-and-ecosystems-poses-food-security-t", 
                      "had_keyword": false, 
                      "id": 5872, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/academics/", 
                      "had_keyword": false, 
                      "id": 5873, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "https://www.youtube.com/user/OregonStateUniv", 
                      "had_keyword": false, 
                      "id": 5874, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://extension.oregonstate.edu/", 
                      "had_keyword": false, 
                      "id": 5875, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/terra/2016/05/enduring-vigil/", 
                      "had_keyword": false, 
                      "id": 5876, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/ua/ncs/archives/2016/oct/want-optimize-those-10000-or-fewer-steps-walk-faster-sit-less", 
                      "had_keyword": false, 
                      "id": 5877, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "https://securelb.imodules.com/s/359/campaign/index.aspx?sid=359&gid=34&pgid=1981&cid=3007", 
                      "had_keyword": false, 
                      "id": 5878, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "https://youtu.be/6DD6lID4R8A", 
                      "had_keyword": false, 
                      "id": 5879, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "https://www.google.com/maps/place/Oregon+State+University/@44.5637806,-123.2794442,17z/data=!3m1!4b1!4m2!3m1!1s0x54c040b9ea50bb43:0xa6fff1dc01f7b49f", 
                      "had_keyword": false, 
                      "id": 5880, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://osucascades.edu/", 
                      "had_keyword": false, 
                      "id": 5881, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/admissions/main/apply-choose-application", 
                      "had_keyword": false, 
                      "id": 5882, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 0, 
                      "dst_url": "http://oregonstate.edu/ua/ncs/archives/2016/sep/research-income-past-year", 
                      "had_keyword": false, 
                      "id": 5883, 
                      "request": 26, 
                      "src_url": "http://oregonstate.edu"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 1, 
                      "dst_url": "", 
                      "had_keyword": false, 
                      "id": 5884, 
                      "request": 26, 
                      "src_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 1, 
                      "dst_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/", 
                      "had_keyword": false, 
                      "id": 5885, 
                      "request": 26, 
                      "src_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 1, 
                      "dst_url": "http://poweredbyorange.com/2016/05/18/can-do-student-leader/", 
                      "had_keyword": false, 
                      "id": 5886, 
                      "request": 26, 
                      "src_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 1, 
                      "dst_url": "http://poweredbyorange.com/rss", 
                      "had_keyword": false, 
                      "id": 5887, 
                      "request": 26, 
                      "src_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 1, 
                      "dst_url": "http://www.oregonstate.edu", 
                      "had_keyword": false, 
                      "id": 5888, 
                      "request": 26, 
                      "src_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 1, 
                      "dst_url": "http://poweredbyorange.com/2011/11/30/bridging-the-gap/", 
                      "had_keyword": false, 
                      "id": 5889, 
                      "request": 26, 
                      "src_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/"
                    }, 
                    {
                      "create_date": "Wed, 19 Oct 2016 20:32:37 GMT", 
                      "depth": 1, 
                      "dst_url": "http://poweredbyorange.com/category/stories/", 
                      "had_keyword": false, 
                      "id": 5890, 
                      "request": 26, 
                      "src_url": "http://poweredbyorange.com/2015/12/30/jeannie-sullivan-fearless-leader/"
                    }
                  ], 
                  "rows": 130858
                }

app.controller("formCtrl", function ($scope, $http) {


    /********** postData *************/
    $scope.postData = function () {
        var data = {
            url: $scope.formData.inputURL,
            keyword: $scope.formData.keyword,
            depth: $scope.formData.depth,
            searchmode: $scope.formData.searchmode
        };
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }

        $http.post('http://138.197.207.83:5000/api/requests', data, config)
        .success(function (data, status, headers, config) {
            $scope.ResponseDetails = data;
            console.log(data);
            console.log(data.id);
            var data_id = data.id;   
            
            // comenting this out for graph testing purposes
            // getData(data_id);


            // short circuiting the getData function for graph testing
            createGraph(test_data);
        })
        .error(function (data, status, header, config) {
            $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };


    /************ getData ***************/
    function getData(data_id) {
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=utf-8;'
            }
        }
        $http.get('http://138.197.207.83:5000/api/results/' + data_id, config)
                .success(function (data, status, headers, config) {
                console.log(data.edges[0].id);
                var crawler_data = data;
                createGraph(crawler_data);   
        });
    };


    /********** createGraph *************/
    function createGraph(crawler_data) {
        var crawler = cytoscape({
            container: document.getElementById('crawler'),
            elements: [],
            style: [
            {
              selector: 'node',
              style: {
                shape: 'circle',
                'background-color': '#1b24d1',
              }
            }],
        });

        for (var i = 0; i < crawler_data.edges.length; i++) {
            addToGraph(crawler_data.edges[i], crawler);
        }  

        crawler.layout({
            name: 'circle'
        });  
    };


    /*********** addToGraph *************/
    function addToGraph(linkIn, graphIn) {
      if ((graphIn.getElementById(linkIn.src_url)).length == 0) {
        graphIn.add({
            data: { id: linkIn.src_url }
          }
        );
      }
      if ((graphIn.getElementById(linkIn.dst_url)).length == 0) {
        graphIn.add({
            data: { id: linkIn.dst_url }
          }
        );
      }
      var source = linkIn.src_url;
      graphIn.add({
        data: {
          id: linkIn.id,
          source: source,
          target: (linkIn.dst_url)
        }
      });
    };

});


    





