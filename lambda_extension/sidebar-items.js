initSidebarItems({"enum":[["LambdaLogRecord","Record in a LambdaLog entry"],["NextEvent","Event that the extension receives in either the INVOKE or SHUTDOWN phase"]],"fn":[["run","Execute the given events processor"],["service_fn","Returns a new [`ServiceFn`] with the given closure."]],"mod":[["requests","Include several request builders to interact with the Extension API."]],"struct":[["Extension","An Extension that runs event and log processors"],["ExtensionError","Simple error that encapsulates human readable descriptions"],["Identity","A no-op generic processor"],["InvokeEvent","Event received when there is a new Lambda invocation."],["LambdaEvent","Wrapper with information about the next event that the Lambda Runtime is going to process"],["LambdaLog","Payload received from the Lambda Logs API See: https://docs.aws.amazon.com/lambda/latest/dg/runtimes-logs-api.html#runtimes-logs-api-msg"],["LogBuffering","Log buffering configuration. Allows Lambda to buffer logs before deliverying them to a subscriber."],["LogPlatformReportMetrics","Platform report metrics"],["MakeIdentity","Service factory to generate no-op generic processors"],["SharedService","A `MakeService` that produces services by cloning an inner service."],["ShutdownEvent","Event received when a Lambda function shuts down."],["Tracing","Request tracing information"]],"trait":[["Service","An asynchronous function from a `Request` to a `Response`."]],"type":[["Error","Error type that extensions may result in"]]});