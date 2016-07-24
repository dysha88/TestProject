var events = {
    serverRequest : [],
    serverResponse : [],
    reelsState : [],
    setGameSettings : [],
    settingsRequest : [],
    settingsResponse : [],
    writingTextConfig_setText: []
};

function addListener(eventName, functionCallback) {
    events[eventName].push(functionCallback);
}


function fireEvent(eventName, params) {
    //console.error(eventName);
    for (var i = 0; i < events[eventName].length; i++) {
        events[eventName][i](params);
    }

}
