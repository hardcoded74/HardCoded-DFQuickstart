if($event['response']['status_code'] ==200){
$duration = (isset($event['request']['payload']['duration']))?$event['request']['payload']['duration']:1800;
//header('Expiry: '.strtotime('+'.$duration.' seconds'));
$event['response']['content']['expiry'] = strtotime('+'.$duration.' seconds');
}