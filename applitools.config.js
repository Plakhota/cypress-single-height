// This config file specifies how to run visual tests with Applitools.
// It applies to all tests in this project.

module.exports = {

    // Concurrency refers to the number of visual checkpoints Applitools will perform in parallel.
    // Warning: If you have a free account, then concurrency will be limited to 1.
    testConcurrency: 60,
    layoutBreakpoints: true,
    waitBeforeCapture: 3000,

    // To connect visual test results to your account,
    // you must set the `APPLITOOLS_API_KEY` environment variable to your Applitools API key.
    // To find it: https://applitools.com/tutorials/getting-started/setting-up-your-environment.html
    // If you don't explicitly set the API key here,
    // then the SDK will automatically read the `APPLITOOLS_API_KEY` environment variable to fetch it.
    apiKey: 'APPLITOOLS_API_KEY',
    
    // A batch is the collection of visual checkpoints for a test suite.
    // Batches are displayed in the dashboard, so use meaningful names.
    batchName: 'Height-responsive app',

    // Applitools can run checkpoints for snapshots against any browser in the Ultrafast Grid.
    // This setting defines 5 unique browser configurations to test.

    browser: [

        // Add 3 desktop browsers with different viewports for cross-browser testing in the Ultrafast Grid.
        // Other browsers are also available, like Edge and IE.
        // {width: 800, height: 100, name: 'chrome'},
        // {width: 800, height: 200, name: 'chrome'},
        // {width: 800, height: 300, name: 'chrome'},
        // {width: 800, height: 400, name: 'chrome'},
        // {width: 800, height: 500, name: 'chrome'},
        // {width: 800, height: 600, name: 'chrome'},
        {width: 800, height: 700, name: 'chrome'},
        // {width: 800, height: 800, name: 'chrome'},
        // {width: 800, height: 900, name: 'chrome'},
        // {width: 800, height: 1000, name: 'chrome'},
        // {width: 800, height: 1100, name: 'chrome'},
        
      
        // {width: 500, height: 600, name: 'chrome'},
        // {width: 500, height: 700, name: 'chrome'},
        // {width: 500, height: 800, name: 'chrome'},
        // {width: 500, height: 900, name: 'chrome'},
        // {width: 500, height: 1000, name: 'chrome'},
        // {width: 500, height: 1100, name: 'chrome'},
    ],        
     
}
