$(function () {
    var toastrOptions = {
        "debug": false,
        "timeOut": 3000,
        "positionClass": "toast-top-full-width"
    };

    var testimonials = {
        "testimonial":
            [
                          {
                              "Notes": "Josh is an extremely talented web developer. He is very proficient with ASP.net MVC, HTML, and JavaScript developer. He is also a very dedicated and helpful person. I really enjoyed working with him at Creative Sreet and I would highly recommend him to any company.",
                              "Name": "Brett Davis",
                              "Link": "https://www.linkedin.com/profile/view?id=12307629"
                          },
                                   {
                                       "Notes": "Working with Josh was the best part of working at Webize. Not only is Josh a great developer, but his enthusiasm about the .NET Framework was something that I haven't seen in a long time. Every Monday morning I could count on Josh to teach me something new that he had discovered (over the weekend) in the latest version of Visual Studio or the .NET Framework. I have no doubt that Josh will be a successful developer.",
                                       "Name": "Jim Smotherman",
                                       "Link": "http://www.linkedin.com/profile/view?id=21748707"
                                   },
        {
            "Notes": "Having a keen ability to know what makes sense in a person's profession while being efficient and proficient are not the kinds of things that are very common, but these are characteristics with which I would use to describe Josh. When he was hired at our company, he promised that we would not be disappointed... he keeps his promises. We were all glad for the development expertise that Josh brought to the team and I'd be grateful to work with him again some day.",
            "Name": "Brian Fedor",
            "Link": "http://www.linkedin.com/profile/view?id=10206336"
        },
         {
             "Notes": "I gave a really short deadline and he exceeded my expectations. Good, fast, and complete work.",
             "Name": "CJBrownname",
             "Link": "http://www.elance.com/e/cjbrownname"
         },
         {
             "Notes": "I was more than happy with provider. The project was not as easy as I had originally thought and jblackstone went out of his way to accommodate all the parameters of the project. He was prompt with his communication, understanding at my technological challenges and over delivered on all promises. Cannot thank you enough. Would recommend to anyone and I will definately use again if I ever need another Access Database developed. Thanks again.",
             "Name": "SallyDSE",
             "Link": "http://www.elance.com/e/sallydse"
         },
          {
              "Notes": "Fast Response to my questions and changes I requested. Diligent and quick. Would use again.",
              "Name": "DocRich",
              "Link": "http://www.elance.com/e/docrich"
          },
           {
               "Notes": "EXCELLENT - HIGHLY RECOMMENDED. The bottom line: My client and I hired him again, immediately, and will probably continue to work with him until we can no longer afford him! ... is simply a rare find. He is intelligent, a hard worker, diligent, responsible, and has an outstanding attitude and work ethic. His prices are outstanding... That said, his work - overall - surpassed the work completed by a company with more experience and greater resources. Our project - which might appear to be simple - was assigned to two companies simultaneously... It took a company with multiple programmers, and ~10 years experience, 80+ hours to get to the testing phase...jblackstone never said how many hours he spent on it --- but he turned it in ahead of the company with more experience and resources ... and never complained. I recommended that my client continue to hire jblackstone --- and, after we all had a phone meeting, in which the application was thoroughly discussed, jblackstone had made my client happy, and made me look good in the process. My client wrote, &quot;Thank you both so much for your efforts. I am so grateful !! Later (about a venues table change) my client wrote jblackstone, &quot;...That is so beyond belief, that you made this 3 week long job happen in a matter of minutes. Thanks sooooooooooooo much for doing that !!!!! I also love how you communicate so well exactly what you did and what the two files are. Some people are very intelligent and very talented, but they do not break things down enough so they can be easily understood. You appear to have that talent...&quot;",
               "Name": "Developport",
               "Link": "http://www.elance.com/e/developport"
           }
        ]
    };

    var certifications = {
        "certification": [
            {
                "Title": "MCTS: Microsoft SQL Server 2008, Database Development",
                "Description": "Microsoft Certified Technology Specialist Certification in SQL 2008 Database Design, TS-433",
                "DateCertified": '06/10/2011'
            },
            {
                "Title": "2778: Writing Queries using Microsoft Sql Server 2008 Transact-SQL",
                "Description": "Microsoft Training Course 2778: Writing Queries using Microsoft Sql Server 2008 Transact-SQL",
                "DateCertified": '05/11/2011'
            },
             {
                 "Title": "MOS: Microsoft Access 2003",
                 "Description": "Microsoft Specialist Certification in Microsoft Access 2003",
                 "DateCertified": '05/19/2008'
             },
             {
                 "Title": "2072: Administering a MS SQL Server 2000 Database",
                 "Description": "Microsoft Training Course 2072: Administering a Microsoft SQL Server 2000 Database",
                 "DateCertified": '02/05/2007'
             }
        ]
    };

    var skills = {
  "skill": [
    {
      "Title": "AngularJS",
      "Description": "",
      "StartDate": "05/01/2014",
      "EndDate": null,
      "Strength": 9
    },
    {
      "Title": "Angular 2 - 7",
      "Description": "",
      "StartDate": "04/01/2016",
      "EndDate": null,
      "Strength": 7
    },
    {
      "Title": "Typescript",
      "Description": "",
      "StartDate": "01/01/2016",
      "EndDate": null,
      "Strength": 7
    },
    {
      "Title": "Node JS",
      "Description": "",
      "StartDate": "04/01/2016",
      "EndDate": null,
      "Strength": 5
    },
    {
      "Title": "AJAX",
      "Description": "",
      "StartDate": "01/01/2009",
      "EndDate": null,
      "Strength": 9
    },
    {
      "Title": "ASP.NET MVC",
      "Description": "(v2 - 5)",
      "StartDate": "11/01/2011",
      "EndDate": null,
      "Strength": 8
    },
    {
      "Title": "ASP.NET WebForms",
      "Description": "(v2, 3, 3.5, 4, 4.5, 4.5.1)",
      "StartDate": "12/01/2008",
      "EndDate": "12/01/2012",
      "Strength": 8
    },
    {
      "Title": "Bootstrap",
      "Description": "(v2, 3, 4)",
      "StartDate": "10/01/2013",
      "EndDate": null,
      "Strength": 8
    },
    {
      "Title": "C#",
      "Description": "(C Sharp)",
      "StartDate": "01/01/2009",
      "EndDate": null,
      "Strength": 7
    },
    {
      "Title": "Classic ASP",
      "Description": "",
      "StartDate": "02/01/2008",
      "EndDate": "09/01/2008",
      "Strength": 6
    },
    {
      "Title": "CSS",
      "Description": "",
      "StartDate": "01/01/2003",
      "EndDate": null,
      "Strength": 9
    },
    {
      "Title": "JQuery",
      "Description": "",
      "StartDate": "08/01/2009",
      "EndDate": null,
      "Strength": 10
    },
    {
      "Title": "Javascript",
      "Description": "",
      "StartDate": "01/01/2005",
      "EndDate": null,
      "Strength": 8
    },
    {
      "Title": "KnockoutJS",
      "Description": "",
      "StartDate": "01/01/2013",
      "EndDate": "01/01/2015",
      "Strength": 9
    },
    {
      "Title": "IIS",
      "Description": "(v 6.0, 7.0)",
      "StartDate": "08/01/2004",
      "EndDate": null,
      "Strength": 8
    },
    {
      "Title": "Microsoft Access 98 - 2007",
      "Description": "",
      "StartDate": "08/01/2005",
      "EndDate": "08/01/2010",
      "Strength": 9
    },
    {
      "Title": "Microsoft Web API",
      "Description": "",
      "StartDate": "04/01/2012",
      "EndDate": null,
      "Strength": 8
    },
    {
      "Title": "Ninject",
      "Description": "Dependency Library for use in ASP.NET MVC Projects",
      "StartDate": "08/01/2014",
      "EndDate": null,
      "Strength": 5
    },
    {
      "Title": "Silverlight",
      "Description": "",
      "StartDate": "07/28/2012",
      "EndDate": "03/01/2013",
      "Strength": 5
    },
    {
      "Title": "SQL Server",
      "Description": "(v2000, 2005, 2008, 2008R2, 2012)",
      "StartDate": "08/01/2005",
      "EndDate": null,
      "Strength": 8
    },
    {
      "Title": "Transact SQL",
      "Description": "SQL Stored Procedures, Views, Functions, Triggers, T-SQL/Transact SQL",
      "StartDate": "08/01/2005",
      "EndDate": null,
      "Strength": 9
    },
    {
      "Title": "VB",
      "Description": "(Visual Basic)",
      "StartDate": "08/01/2004",
      "EndDate": null,
      "Strength": 7
    },
    {
      "Title": "WCF Data Services",
      "Description": "",
      "StartDate": "11/01/2011",
      "EndDate": "03/01/2013",
      "Strength": 6
    },
    {
      "Title": "WPF",
      "Description": "",
      "StartDate": "07/28/2012",
      "EndDate": "03/01/2013",
      "Strength": 4
    },
    {
      "Title": "Windows 8 Applications",
      "Description": "(XAML and JS Development)",
      "StartDate": "01/01/2013",
      "EndDate": "11/01/2013",
      "Strength": 5
    },
    {
      "Title": "XML",
      "Description": "",
      "StartDate": "02/01/2008",
      "EndDate": null,
      "Strength": 8
    }
  ]
};

    var jobs = {
          "job": [
    {
      "Company": "International Medical Group",
      "StartDate": "02/15/2016",
      "EndDate": "",
      "JobTitle": "Senior Application Developer",
      "description": [
        {
          "Description": "Create and Maintain Web Applications using Visual Studio 2012 and 2015 (ASP.NET, MVC 4.5.1, C#, Entity Framework, JQuery, AngularJS 1, 2 and SQL Server 2012)."
        },
        {
          "Description": "Assist/Mentor junior developers with various programming tasks."
        }
      ]
    },
    {
      "Company": "Indiana University - HELPNet Tech Services",
      "StartDate": "04/01/2015",
      "EndDate": "12/01/2015",
      "JobTitle": "ASP.NET/SQL Developer",
      "description": [
        {
          "Description": "Create and Maintain Web Applications using Visual Studio 2013 (ASP.NET, MVC 4.5.1, C#, JQuery, AJAX, KnockoutJS, AngularJS), and SQL Server 2012."
        },
        {
          "Description": "Create process improvements to simplify site development for team."
        },
        {
          "Description": "Mentor younger developers."
        },
        {
          "Description": "Participate in requirements gathering and time estimate meetings"
        }
      ]
    },
            {
                "Company": "Creative Street Media Group",
                "StartDate": "07/15/2011",
                "EndDate": "03/15/2015",
                "JobTitle": "Senior Application Developer",
                "description": [
                    {
                        "Description": "Improve and Maintain current Websites using Visual Studio 2013 (ASP.NET, MVC 4.5, C#, VB.NET, JQuery, AJAX), and SQL 2012."
                    },
                    {
                        "Description": "Develop new Web Applications to accommodate varied requests."
                    },
                    {
                        "Description": "Analyze existing applications to ensure top performance."
                    },
                    {
                        "Description": "Examples include: <a target='_blank' href='http://www.theindianatreeproject.org'>http://www.theindianatreeproject.org</a> , <a target='_blank' href='http://www.lifeofanathlete.com'>http://www.lifeofanathlete.com</a> , <a target='_blank' href='http://www.okloa.org'>http://www.okloa.org</a>, <a target='_blank' href='http://asaaeligibility.com'>http://asaaeligibility.com</a>, <a target='_blank' href='http://www.nfhslearn.com'>http://www.nfhslearn.com</a>, <a target='_blank' href='http://indianapolisairport.com'>http://indianapolisairport.com</a>, <a target='_blank' href='http://www.yourteencourt.org'>http://www.yourteencourt.org</a>"
                    }
                ]
            },
            {
                "Company": "Stericycle",
                "StartDate": "08/28/2012",
                "EndDate": "06/01/2013",
                "JobTitle": "Application Developer",
                "description": [
                    {
                        "Description": "Process Improvement for internal multi-tier Web and Desktop Applications"
                    },
                    {
                        "Description": "Utilize Silverlight, WCF Data Services, MVVM, C#, .Net 4.0, .Net 4.5"
                    },
                    {
                        "Description": "Part of Agile environment team devoted to improving process flow and decreasing processing time"
                    }
                ]
            }
            ,
            {
                "Company": "SRI Incorporated",
                "StartDate": "02/15/2008",
                "EndDate": "07/01/2011",
                "JobTitle": "Application Developer",
                "description": [
                    {
                        "Description": "Review current processes and determine how to improve and cut processing time."
                    },
                    {
                        "Description": "Websites include: <a href='http://www.sri-taxsale.com' target='_blank'>http://www.sri-taxsale.com</a>, <a href='http://www.sri-auctionsonline.com' target='_blank'>http://www.sri-auctionsonline.com</a>, <a href='http://www.sri-sheriffsale.com' target='_blank'>http://www.sri-sheriffsale.com</a>, <a href='http://www.sri-surplusauctions.com' target='_blank'>http://www.sri-surplusauctions.com</a>, <a href='http://www.assetauctionsonline.com' target='_blank'>http://www.assetauctionsonline.com</a>, <a href='http://www.indiana-homestead.com' target='_blank'>http://www.indiana-homestead.com</a>."
                    },
                    {
                        "Description": "Improve and Maintain existing Microsoft Access Database Applications utilizing VBA and Macros."
                    }
                    ,
                    {
                        "Description": "Improve and Maintain current Websites using Visual Studio 2010 (ASP.NET, VB.NET, C#, JQuery, AJAX), and SQL 2005."
                    },
                    {
                        "Description": "Develop new Web and Desktop Applications to accommodate varied requests."
                    }
                    ,
                    {
                        "Description": "Assisted county government with web and database driven system to process Homestead Verification forms."
                    }
                ]
            }
            ,
            {
                "Company": "Unison Engine Components",
                "StartDate": "04/01/2005",
                "EndDate": "02/01/2008",
                "JobTitle": "Networking Specialist",
                "description": [
                    {
                        "Description": "First level of IT Support for UEC-TH."
                    },
                    {
                        "Description": "Operate Active Directory and distribute permissions."
                    },
                    {
                        "Description": "Install operating systems, various software and hardware."
                    },
                    {
                        "Description": "Converted Lotus Servers to SQL Server utilizing Microsoft Access."
                    },
                    {
                        "Description": "Sole Design and Maintenance of 45 SQL/Access databases."
                    },
                    {
                        "Description": "Created multiple databases to simplify processes, eliminate paper, and track more efficiently using Access/VB, and SQL Server 2000."
                    },
                    {
                        "Description": "In charge of intranet webpage, all designs and modifications."
                    },
                     {
                         "Description": "Used Microsoft Frontpage, Macromedia Fireworks, Dreamweaver and Crystal Excelsius 4.5 to maintain website."
                     },
                     {
                         "Description": "Implementation, Design, and Maintenance of 2003 Sharepoint web server."
                     }
                ]
            }
        ]
    };

    var getMonthName = function (month) {
        var months = {
            "month": [
                    {
                        "ID": 1,
                        "Name": "January"
                    },
{
    "ID": 2,
    "Name": "February"
},
{
    "ID": 3,
    "Name": "March"
},
{
    "ID": 4,
    "Name": "April"
},
{
    "ID": 5,
    "Name": "May"
},
{
    "ID": 6,
    "Name": "June"
},
{
    "ID": 7,
    "Name": "July"
},
{
    "ID": 8,
    "Name": "August"
},
{
    "ID": 9,
    "Name": "September"
},
{
    "ID": 10,
    "Name": "October"
},
{
    "ID": 11,
    "Name": "November"
},
{
    "ID": 12,
    "Name": "December"
}
            ]
        };
        var selected = months.month.filter(function (item) {
            return item.ID == month;
        })[0];
        return selected.Name.substr(0, 3);
    };

    var timeInUse = function (start, end) {
        var startDate = new Date(start);
        var endDate = new Date();

        if (end != null) {
            endDate = new Date(end);
        }

        var totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
        var totalYears = (endDate.getFullYear() - startDate.getFullYear());

        if (totalMonths < 12)
            return totalMonths + ' Month' + (totalMonths > 1 ? 's' : '');

        return totalYears + ' Year' + (totalYears > 1 ? 's' : '');
    }

    $('#currentYear').text(new Date().getFullYear());

    $.each(certifications.certification, function (index, item) {
        var row = $('<tr />').css('cursor', 'pointer').click(function (e) {
            e.preventDefault();
            toastr.info(item.Description, item.Title, toastrOptions);
        });
        $('<td />').text(item.Title).appendTo(row);
        $('<td />').text(new Date(item.DateCertified).toDateString()).appendTo(row);
        row.appendTo('#certifications');
    });

    $.each(skills.skill, function (index, item) {
        var row = $('<tr />');
        $('<td />').html(item.Title + (item.Description != '' ? '<br /><i>' + item.Description + '</i>' : '')).appendTo(row);
        $('<td />').text(timeInUse(item.StartDate, item.EndDate)).appendTo(row);
        var progressTD = $('<td />');
        var progress = $('<div />').attr('title', item.Strength + ' / 10').addClass('progress-bar').css('width', parseInt(item.Strength) * 10 + '%');
        var progressParent = $('<div />').addClass('progress');
        $(progress).appendTo(progressParent);
        $(progressParent).appendTo(progressTD);
        $(progressTD).appendTo(row);
        row.appendTo('#skills');
    });

    $.each(jobs.job, function (index, item) {
        var row = $('<tr />').css('cursor', 'pointer')
            .click(function (e) {
                e.preventDefault();
                var msg = '<ul class="list-group">';
                for (var i = 0; i < item.description.length; i++) {
                    var desc = item.description[i].Description;
                    msg += '<li class="list-group-item">';
                    msg += desc;
                    msg += '</li>';
                }
                msg += '</ul>';
                bootbox.dialog({
                    message: msg,
                    title: item.Company,
                    buttons: {
                        main: {
                            label: "OK",
                            className: "btn-primary"
                        }
                    }
                });
            });
        $('<td />').text(item.Company).appendTo(row);
        $('<td />').text(item.JobTitle).appendTo(row);
        $('<td />').text(new Date(item.StartDate).toDateString()).appendTo(row);
        $('<td />').text(item.EndDate == '' ? 'Current' : new Date(item.EndDate).toDateString()).appendTo(row);
        row.appendTo('#jobs');
    });

    $.each(testimonials.testimonial, function (index, item) {
        var container = $('<li />').addClass('list-group-item');
        var sub = $('<blockquote />');
        var link = $('<a />').attr('href', item.Link).attr('target', '_blank').text(item.Name).wrap('<p></p>');
        $('<p />').html(item.Notes).appendTo(sub);
        link.appendTo(sub);
        sub.appendTo(container);
        container.appendTo('#testimonials');
    });

    $.getJSON('http://jblackstone.blogspot.com/feeds/posts/default?orderby=published&max-results=5&alt=json-in-script&callback=?', function (data) {
        $.each(data.feed.entry, function (index, item) {
            var container = $('<li />').addClass('list-group-item');
            var sub = $('<div />').addClass('media');
            var title = item.title.$t;
            var published = new Date(item.published.$t);
            var pubMonth = published.getMonth() + 1;
            var url = item.link[4] == null ? '' : '<a target="_blank" href="' + item.link[4].href + '">Read More</a>';
            var shortDesc = (item.content.$t).substr(0, 225) + ' ... ' + url;
            var dateContainer = $('<div />').addClass('pull-left');
            var dateSubContainer = $('<div />').addClass('date');
            $('<span />').addClass('date_month').text(getMonthName(pubMonth)).appendTo(dateSubContainer);
            $('<span />').addClass('date_year').text(published.getFullYear()).appendTo(dateSubContainer);
            dateSubContainer.appendTo(dateContainer);
            dateContainer.appendTo(sub);
            var textContainer = $('<div />').addClass('media-body');
            $('<h4 />').text(title).appendTo(textContainer);
            $('<p />').html(shortDesc).appendTo(textContainer);
            textContainer.appendTo(sub);
            sub.appendTo(container);
            container.appendTo('#blogs');
            $('#loadingBlogs').hide();
            $('#blogs').show();
        });
    });
});
