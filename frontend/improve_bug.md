接口请求：
curl 'http://localhost:8000/api/v1/resumes/improve' \
  -H 'Accept: */*' \
  -H 'Accept-Language: zh-CN,zh;q=0.9' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:3000' \
  -H 'Referer: http://localhost:3000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  --data-raw '{"resume_id":"8c9bc5ac-3a80-4742-acf2-32bdd7d5fe3c","job_id":"ae082088-0b41-433d-8b6c-d5e169f039ea"}'

接口返回： 

{
    "request_id": "resumes:baef17d7-5e86-46e3-a152-2e4f767c9072",
    "data": {
        "resume_id": "8c9bc5ac-3a80-4742-acf2-32bdd7d5fe3c",
        "job_id": "ae082088-0b41-433d-8b6c-d5e169f039ea",
        "original_score": 0.5378098277064897,
        "new_score": 0.5609602935384097,
        "updated_resume": "<p>```md\n<strong>Male | Age: 35 | 13534834915 | 497070928@qq.com</strong></p>\n<p><strong>13 years experience | Intention: PHP Architect - Technical Head | Expected Salary: 20-25K | Expected City: Guangzhou / Shenzhen</strong></p>\n<hr />\n<p><strong>Professional Summary</strong></p>\n<p>Full-stack engineer with over 13 years of experience, specializing in PHP development and proficient in Go, JavaScript, and other programming languages. Extensive experience in leading cross-border e-commerce and enterprise service projects, with a strong focus on SaaS solutions and data-driven BI systems. Expertise in building complex systems using Laravel, WordPress, Redis, Elasticsearch, Swoole, and MySQL. Proficient in Linux operating systems, Shell scripting, and MVC development patterns, with hands-on experience in frameworks such as ThinkPHP, Laravel, and Yii. Strong communication skills and excellent coding habits, with a proven track record of delivering high-standard projects.</p>\n<hr />\n<p><strong>Professional Experience</strong></p>\n<p><strong>Technical Architect &amp; Team Lead</strong><br />\n<em>2023.01 - 2024.02</em></p>\n<ul>\n<li>Led the design and implementation of scalable and secure technical architectures for new projects, incorporating the latest technology trends.</li>\n<li>Guided a team of 5 in mastering complex technology stacks, including WordPress, WooCommerce, and data development techniques, to deliver key projects on time.</li>\n<li>Collaborated with multiple departments to translate business requirements into viable technical solutions, enhancing customer satisfaction.</li>\n<li>Spearheaded digital transformation initiatives, implementing AI-driven solutions to improve business efficiency and decision quality.</li>\n</ul>\n<p><strong>E-commerce Platform Architect</strong><br />\n<em>2021.01 - 2022.01</em></p>\n<ul>\n<li>Designed and implemented a deeply customized e-commerce platform architecture based on Magento, ensuring system stability and scalability.</li>\n<li>Provided comprehensive technical solutions, including front-end optimization with Vue and uniapp, back-end services, and MySQL database design.</li>\n<li>Optimized system performance to enhance user experience and conversion rates, maintaining smooth operations during high traffic periods.</li>\n</ul>\n<p><strong>Cross-border E-commerce Tool Platform Developer</strong><br />\n<em>2020.01 - 2020.11</em></p>\n<ul>\n<li>Led the development of a cross-border e-commerce tool platform using Laravel, MySQL, Redis, and Swoole, integrating self-developed and third-party software.</li>\n<li>Developed a real-time evaluation system, supporting business needs and handling significant revenue streams.</li>\n<li>Implemented asynchronous task queues and MySQL index optimization to enhance data processing capabilities.</li>\n</ul>\n<p><strong>Data Project Leader</strong><br />\n<em>2016.11 - 2018.07</em></p>\n<ul>\n<li>Designed and implemented efficient data selection tools and real-time sales data monitoring systems to support data-driven decision-making.</li>\n<li>Customized business systems to meet specific departmental needs, improving work efficiency and cross-department collaboration.</li>\n</ul>\n<p><strong>Technical Director of Cross-border E-commerce ERP System</strong><br />\n<em>2014.04 - 2016.06</em></p>\n<ul>\n<li>Developed a comprehensive business management system for platforms like Amazon, eBay, and AliExpress using PHP and MySQL.</li>\n<li>Optimized SQL performance and resolved performance bottlenecks, ensuring system stability and scalability.</li>\n</ul>\n<p><strong>Core Developer for Wine Price Comparison Network</strong><br />\n<em>2011.08 - 2013.08</em></p>\n<ul>\n<li>Developed a wine price comparison search engine using the CI framework and Sphinx search engine, achieving significant SEO results.</li>\n<li>Responsible for code writing and full participation in the product development process, contributing to the project's success.</li>\n</ul>\n<hr />\n<p><strong>Education &amp; Certifications</strong></p>\n<ul>\n<li>Holds certifications in cloud computing, big data, and artificial intelligence.</li>\n<li>Strong English proficiency and a commitment to continuous learning and professional development.</li>\n</ul>\n<hr />\n<p><strong>Technical Skills</strong></p>\n<ul>\n<li><strong>Languages &amp; Frameworks:</strong> PHP, Go, JavaScript, Laravel, WordPress, ThinkPHP, Yii</li>\n<li><strong>Databases:</strong> MySQL, Redis</li>\n<li><strong>Tools &amp; Technologies:</strong> Linux, Shell scripting, Swoole, RabbitMQ, Workerman, Vue, uniapp</li>\n<li><strong>Domains:</strong> E-commerce, ERP, Data Warehouse, AI, APIs</li>\n</ul>\n<hr />\n<p><strong>Personal Projects &amp; Publications</strong></p>\n<ul>\n<li>My college graduation thesis: <a href=\"http://www.doc88.com/p-6768199779016.html\">http://www.doc88.com/p-6768199779016.html</a></li>\n<li>My blog: <a href=\"https://liangdabiao.com/\">https://liangdabiao.com/</a>\n```</li>\n</ul>",
        "resume_preview": {
            "personalInfo": {
                "name": "Liang Dabiao",
                "title": "Full-stack Engineer",
                "email": "497070928@qq.com",
                "phone": "13534834915",
                "location": null,
                "website": "https://liangdabiao.com/",
                "linkedin": null,
                "github": null
            },
            "summary": "Full-stack engineer with over 13 years of experience, specializing in PHP development and proficient in Go, JavaScript, and other programming languages. Extensive experience in leading cross-border e-commerce and enterprise service projects, with a strong focus on SaaS solutions and data-driven BI systems. Expertise in building complex systems using Laravel, WordPress, Redis, Elasticsearch, Swoole, and MySQL. Proficient in Linux operating systems, Shell scripting, and MVC development patterns, with hands-on experience in frameworks such as ThinkPHP, Laravel, and Yii. Strong communication skills and excellent coding habits, with a proven track record of delivering high-standard projects.",
            "experience": [
                {
                    "id": 0,
                    "title": "Technical Architect & Team Lead",
                    "company": "",
                    "location": "",
                    "years": "2023-01-01 - 2024-02-01",
                    "description": [
                        "Led the design and implementation of scalable and secure technical architectures for new projects, incorporating the latest technology trends.",
                        "Guided a team of 5 in mastering complex technology stacks, including WordPress, WooCommerce, and data development techniques, to deliver key projects on time.",
                        "Collaborated with multiple departments to translate business requirements into viable technical solutions, enhancing customer satisfaction.",
                        "Spearheaded digital transformation initiatives, implementing AI-driven solutions to improve business efficiency and decision quality."
                    ]
                },
                {
                    "id": 1,
                    "title": "E-commerce Platform Architect",
                    "company": "",
                    "location": "",
                    "years": "2021-01-01 - 2022-01-01",
                    "description": [
                        "Designed and implemented a deeply customized e-commerce platform architecture based on Magento, ensuring system stability and scalability.",
                        "Provided comprehensive technical solutions, including front-end optimization with Vue and uniapp, back-end services, and MySQL database design.",
                        "Optimized system performance to enhance user experience and conversion rates, maintaining smooth operations during high traffic periods."
                    ]
                },
                {
                    "id": 2,
                    "title": "Cross-border E-commerce Tool Platform Developer",
                    "company": "",
                    "location": "",
                    "years": "2020-01-01 - 2020-11-01",
                    "description": [
                        "Led the development of a cross-border e-commerce tool platform using Laravel, MySQL, Redis, and Swoole, integrating self-developed and third-party software.",
                        "Developed a real-time evaluation system, supporting business needs and handling significant revenue streams.",
                        "Implemented asynchronous task queues and MySQL index optimization to enhance data processing capabilities."
                    ]
                },
                {
                    "id": 3,
                    "title": "Data Project Leader",
                    "company": "",
                    "location": "",
                    "years": "2016-11-01 - 2018-07-01",
                    "description": [
                        "Designed and implemented efficient data selection tools and real-time sales data monitoring systems to support data-driven decision-making.",
                        "Customized business systems to meet specific departmental needs, improving work efficiency and cross-department collaboration."
                    ]
                },
                {
                    "id": 4,
                    "title": "Technical Director of Cross-border E-commerce ERP System",
                    "company": "",
                    "location": "",
                    "years": "2014-04-01 - 2016-06-01",
                    "description": [
                        "Developed a comprehensive business management system for platforms like Amazon, eBay, and AliExpress using PHP and MySQL.",
                        "Optimized SQL performance and resolved performance bottlenecks, ensuring system stability and scalability."
                    ]
                },
                {
                    "id": 5,
                    "title": "Core Developer for Wine Price Comparison Network",
                    "company": "",
                    "location": "",
                    "years": "2011-08-01 - 2013-08-01",
                    "description": [
                        "Developed a wine price comparison search engine using the CI framework and Sphinx search engine, achieving significant SEO results.",
                        "Responsible for code writing and full participation in the product development process, contributing to the project's success."
                    ]
                }
            ],
            "education": [
                {
                    "id": 0,
                    "institution": "",
                    "degree": "Certifications in cloud computing, big data, and artificial intelligence",
                    "years": null,
                    "description": "Strong English proficiency and a commitment to continuous learning and professional development."
                }
            ],
            "skills": [
                "PHP",
                "Go",
                "JavaScript",
                "Laravel",
                "WordPress",
                "ThinkPHP",
                "Yii",
                "MySQL",
                "Redis",
                "Linux",
                "Shell scripting",
                "Swoole",
                "RabbitMQ",
                "Workerman",
                "Vue",
                "uniapp",
                "E-commerce",
                "ERP",
                "Data Warehouse",
                "AI",
                "APIs"
            ]
        },
        "improvements": [
            {
                "suggestion": "Emphasize your experience with PHP more prominently in your resume"
            },
            {
                "suggestion": "Emphasize your experience with Linux more prominently in your resume"
            },
            {
                "suggestion": "Emphasize your experience with OOP more prominently in your resume"
            },
            {
                "suggestion": "Emphasize your experience with MVC more prominently in your resume"
            },
            {
                "suggestion": "Emphasize your experience with MySQL more prominently in your resume"
            }
        ],
        "details": "Resume match score improved from 53.78% to 56.1%",
        "commentary": "Your resume has been optimized to better match the job requirements. Key improvements include highlighting relevant skills and experience."
    }
}


问题： "updated_resume" 并没有在界面上有显示效果




请求：http://localhost:3000/dashboard?_rsc=1rtbj
返回：
1:"$Sreact.fragment"
2:I["[project]/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)",["/_next/static/chunks/node_modules_next_dist_1a6ee436._.js","/_next/static/chunks/app_favicon_ico_mjs_659ce808._.js"],"default"]
3:I["[project]/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)",["/_next/static/chunks/node_modules_next_dist_1a6ee436._.js","/_next/static/chunks/app_favicon_ico_mjs_659ce808._.js"],"default"]
4:I["[project]/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)",["/_next/static/chunks/node_modules_next_dist_1a6ee436._.js","/_next/static/chunks/app_favicon_ico_mjs_659ce808._.js"],"ClientPageRoot"]
5:I["[project]/app/(default)/dashboard/page.tsx [app-client] (ecmascript)",["/_next/static/chunks/app_layout_tsx_c0237562._.js","/_next/static/chunks/_929b7df1._.js","/_next/static/chunks/app_(default)_layout_tsx_860dbb0b._.js","/_next/static/chunks/_30ca79ed._.js","/_next/static/chunks/node_modules_tailwind-merge_dist_bundle-mjs_mjs_b854acb4._.js","/_next/static/chunks/node_modules_motion_dist_es_235672ed._.js","/_next/static/chunks/node_modules_b6dd08dd._.js","/_next/static/chunks/app_(default)_dashboard_page_tsx_d49b05ca._.js"],"default"]
6:I["[project]/node_modules/next/dist/client/components/metadata/metadata-boundary.js [app-client] (ecmascript)",["/_next/static/chunks/node_modules_next_dist_1a6ee436._.js","/_next/static/chunks/app_favicon_ico_mjs_659ce808._.js"],"OutletBoundary"]
d:I["[project]/node_modules/next/dist/client/components/metadata/async-metadata.js [app-client] (ecmascript)",["/_next/static/chunks/node_modules_next_dist_1a6ee436._.js","/_next/static/chunks/app_favicon_ico_mjs_659ce808._.js"],"AsyncMetadataOutlet"]
13:I["[project]/node_modules/next/dist/client/components/metadata/metadata-boundary.js [app-client] (ecmascript)",["/_next/static/chunks/node_modules_next_dist_1a6ee436._.js","/_next/static/chunks/app_favicon_ico_mjs_659ce808._.js"],"ViewportBoundary"]
19:I["[project]/node_modules/next/dist/client/components/metadata/metadata-boundary.js [app-client] (ecmascript)",["/_next/static/chunks/node_modules_next_dist_1a6ee436._.js","/_next/static/chunks/app_favicon_ico_mjs_659ce808._.js"],"MetadataBoundary"]
1e:"$Sreact.suspense"
1f:I["[project]/node_modules/next/dist/client/components/metadata/async-metadata.js [app-client] (ecmascript)",["/_next/static/chunks/node_modules_next_dist_1a6ee436._.js","/_next/static/chunks/app_favicon_ico_mjs_659ce808._.js"],"AsyncMetadata"]
8:{"name":"__next_outlet_boundary__","env":"Server","key":null,"owner":null,"stack":[],"props":{"ready":"$E(async function getViewportReady() {\n        await viewport();\n        return undefined;\n    })"}}
7:D"$8"
a:{"name":"__next_outlet_boundary__","env":"Server","key":null,"owner":null,"stack":[],"props":{"ready":"$E(async function getMetadataReady() {\n        // Only warm up metadata() call when it's blocking metadata,\n        // otherwise it will be fully managed by AsyncMetadata component.\n        if (!serveStreamingMetadata) {\n            await metadata();\n        }\n        return undefined;\n    })"}}
9:D"$a"
c:{"name":"StreamingMetadataOutlet","env":"Server","key":null,"owner":null,"stack":[],"props":{}}
b:D"$c"
b:["$","$Ld",null,{"promise":"$@e"},"$c",[],1]
10:{"name":"NonIndex","env":"Server","key":null,"owner":null,"stack":[],"props":{"pagePath":"/dashboard","statusCode":200,"isPossibleServerAction":false}}
f:D"$10"
f:null
12:{"name":"ViewportTree","env":"Server","key":"SFS9ZYn5rIBik3vUNs2xX","owner":null,"stack":[],"props":{}}
11:D"$12"
15:{"name":"__next_viewport_boundary__","env":"Server","key":null,"owner":"$12","stack":[],"props":{}}
14:D"$15"
11:["$","$1","SFS9ZYn5rIBik3vUNs2xX",{"children":[["$","$L13",null,{"children":"$L14"},"$12",[],1],["$","meta",null,{"name":"next-size-adjust","content":""},"$12",[],1]]},null,null,0]
17:{"name":"","env":"Server","key":null,"owner":null,"stack":[],"props":{}}
16:D"$17"
18:{"name":"MetadataTree","env":"Server","key":"SFS9ZYn5rIBik3vUNs2xX","owner":null,"stack":[],"props":{}}
16:D"$18"
1b:{"name":"__next_metadata_boundary__","env":"Server","key":null,"owner":"$18","stack":[],"props":{}}
1a:D"$1b"
16:[["$","$L19","SFS9ZYn5rIBik3vUNs2xX",{"children":"$L1a"},"$18",[],1]]
1d:{"name":"","env":"Server","key":null,"owner":null,"stack":[],"props":{}}
1c:D"$1d"
1c:null
0:{"b":"development","f":[["children","(default)","children","dashboard",["dashboard",{"children":["__PAGE__",{}]}],["dashboard",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{},null,[],1],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"},null,[],1]]},null,[],0],{"children":["__PAGE__",["$","$1","c",{"children":[["$","$L4",null,{"Component":"$5","searchParams":{},"params":{}},null,[],1],"$undefined",[["$","script","script-0",{"src":"/_next/static/chunks/_30ca79ed._.js","async":true,"nonce":"$undefined"},null,[],0],["$","script","script-1",{"src":"/_next/static/chunks/node_modules_tailwind-merge_dist_bundle-mjs_mjs_b854acb4._.js","async":true,"nonce":"$undefined"},null,[],0],["$","script","script-2",{"src":"/_next/static/chunks/node_modules_motion_dist_es_235672ed._.js","async":true,"nonce":"$undefined"},null,[],0],["$","script","script-3",{"src":"/_next/static/chunks/node_modules_b6dd08dd._.js","async":true,"nonce":"$undefined"},null,[],0],["$","script","script-4",{"src":"/_next/static/chunks/app_(default)_dashboard_page_tsx_d49b05ca._.js","async":true,"nonce":"$undefined"},null,[],0]],["$","$L6",null,{"children":["$L7","$L9","$b"]},null,[],1]]},null,[],0],{},null,false]},null,false],["$","$1","h",{"children":["$f","$11","$16","$1c"]},null,[],0],false]],"S":false}
1a:["$","$1e",null,{"fallback":null,"children":["$","$L1f",null,{"promise":"$@20"},"$1b",[],1]},"$1b",[],1]
9:null
14:[["$","meta","0",{"charSet":"utf-8"},"$8",[],0],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"},"$8",[],0]]
7:null
e:{"metadata":[["$","title","0",{"children":"Resume Matcher"},"$c",[],0],["$","meta","1",{"name":"description","content":"Build your resume with Resume Matcher"},"$c",[],0],["$","meta","2",{"name":"application-name","content":"Resume Matcher"},"$c",[],0],["$","meta","3",{"name":"keywords","content":"resume,matcher,job,application"},"$c",[],0],["$","link","4",{"rel":"icon","href":"/favicon.ico?favicon.45db1c09.ico","sizes":"256x256","type":"image/x-icon"},"$c",[],0]],"error":null,"digest":"$undefined"}
20:{"metadata":"$e:metadata","error":null,"digest":"$undefined"}
