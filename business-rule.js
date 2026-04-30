(function executeRule(current, previous /*null when async*/) {

    if (current.impact == 1 && current.urgency == 1) {
        current.priority = 1;
    }

})(current, previous);
