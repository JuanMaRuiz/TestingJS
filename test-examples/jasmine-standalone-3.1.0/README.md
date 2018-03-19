# Some notes about jasmine-standalone approach

If you check the examples of using jasmine-standalone you'll see this structure:

```
── SpecRunner.html
├── lib
│   └── jasmine-3.1.0
│       ├── boot.js
│       ├── jasmine-html.js
│       ├── jasmine.css
│       ├── jasmine.js
│       └── jasmine_favicon.png
├── spec                         // This folder contains all the specs (tests) for your project. We'll keep this folder and structure
│   ├── PlayerSpec.js
│   └── SpecHelper.js        
└── src                         // This folder usually contains the source files of your application.
    ├── Player.js
    └── Song.js
```

In order to avoid too much duplication of code, instead of moving the application logic to ```src``` folder whithin ```jasmine-standalone``` we'll import the functionality from ```../../app/scripts/``` bazinga application scripts folder.
