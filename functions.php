<?php
/**
 * Created by PhpStorm.
 * User: gkathire
 * Date: 2/2/2018
 * Time: 2:56 PM
 */

function confirm_query($result_set) {
    if (!$result_set) {
        die("Database query failed.");
    }
}

function getQuestionTypes(){
    global $connection;
    $query  = "SELECT qstntype,id FROM `rmrqstntype` WHERE rmrqstntype.qstnfrmid=1 order by id" ;
    $result = mysqli_query($connection, $query);
    error_log("query getQuestionTypes \n" . $query , 3, "C:/XampG/htdocs/error.log");
    confirm_query($result);
    return $result;
}


function getQuestions($id){
    global $connection;
    $query  = "SELECT rmrqstntype.id,rmrqstntype.qstntype,rmrqstns.id as qid,rmrqstns.qstns,rmrqstns.qstnstypeid FROM `rmrqstntype`,rmrqstns where rmrqstntype.id=rmrqstns.qstnstypeid and rmrqstntype.id=$id order by rmrqstns.id" ;
    $result = mysqli_query($connection, $query);
    error_log("query getQuestions \n" . $query , 3, "C:/XampG/htdocs/error.log");
    confirm_query($result);
    return $result;
}

function getOptions($qid){
    global $connection;
    $query  = "select * from rmrqstnoptions where rmrqstnoptions.qstnsId=$qid order by id" ;
    $result = mysqli_query($connection, $query);
    error_log("query getOptions \n" . $query , 3, "C:/XampG/htdocs/error.log");
    confirm_query($result);
    return $result;
}













?>