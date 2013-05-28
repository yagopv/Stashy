var optimize = require('./modules/optimize');  

// Minify & bundle project assets under css and src directories  
optimize.optimizeProjectAssets();

 // Minify & bundle documents assets under Scripts and Content web site directories
optimize.optimizeDocsAssets();