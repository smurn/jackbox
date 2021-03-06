(function () {

    // Defer Qunit so RequireJS can work its magic and resolve all modules.
    QUnit.config.autostart = false;

    // Configure RequireJS so it resolves relative module paths from the `src`
    // folder.
    require.config({
        baseUrl: "src",
        paths: {
            jquery:"../lib/jquery",
        }
    });

    var testModules = [
        "test/first-test.js"
    ];

    // Resolve all testModules and then start the Test Runner.
    require(testModules, QUnit.start);
}());
