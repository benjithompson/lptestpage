function lpTagBind(){
    console.log("Bind lpTag AFTER_CREATE_ENGAGEMENT_INSTANCE")
    window.lpTag.events.bind(
        "RENDERER_STUB",
        "AFTER_CREATE_ENGAGEMENT_INSTANCE",
        () => {
            var renderEvents = lpTag.events.hasFired("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE");
            console.log("RenderEvents:");
            console.table(renderEvents)
        }
            
    )
    console.log("complete");
}

waitForTag(lpTagBind);