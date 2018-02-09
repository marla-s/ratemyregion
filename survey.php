<?php
include("db_connection.php");
include("functions.php");
?>

<?php
$qustnType= getQuestionTypes();
$qTypecount=mysqli_num_rows($qustnType);
error_log("\nrow count" .$qTypecount , 3, "C:/XampG/htdocs/error.log");

?>

<!DOCTYPE html>
<html lang="en" >

<head>
    <meta charset="UTF-8">
    <title>Survey</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="js/jquery.bootstrap.wizard.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Rokkitt" rel="stylesheet">

    <link rel="stylesheet" href="css/styleSurvey.css">
    <link rel="stylesheet" href="css/style.css">
    <style>
        .progress-bar {
            border-radius: 5px;
            float: left;
            width: 0%;
            height: 100%;
            font-size: 12px;
            line-height: 20px;
            color: #fff;
            text-align: center;
            background-color: #337ab7;
        .box-shadow(inset 0 -1px 0 rgba(0,0,0,.15));
        .transition(width .6s ease);
        }
        .alert-danger {
            color: #a94442;
            background-color: #f2dede;
            border-color: #ebccd1;
        }
        .alert {
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid transparent;
            border-radius: 4px;
        }
        .pager li > a:hover,
        .pager li > a:focus {
            text-decoration: none;
            background-color:  #fff;
            color: #333;
        }

        .scrollposition1{
            opacity:1
        }

        .banner{
            width:100%;
            height: 15px;
            margin:7px auto;
            -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
            -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
            /*-moz-border-radius: 15px;*/
            /*-webkit-border-radius: 15px;*/
            padding-left:190px;
        }

        .banner0{
            background: #656964 url(banner0.png) no-repeat center left;
        }


    </style>

</head>


<body style="color:#333">

<div class="page">
    <header class="page-head" >
        <div class="rd-navbar-wrap" style="height: 50px;">
            <nav data-layout="rd-navbar-fixed "  data-sm-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-stick-up-clone="false" data-md-stick-up-offset="53px" data-lg-stick-up-offset="53px" data-md-stick-up="true" data-lg-stick-up="true" class="rd-navbar rd-navbar-corporate-dark rd-navbar-original rd-navbar-static navbar-fixed-top" >
                <div class="rd-navbar-inner">
                    <div class="rd-navbar-group rd-navbar-search-wrap" style="padding:20px 10px">
                        <div class="rd-navbar-panel">
                            <button data-custom-toggle=".rd-navbar-nav-wrap" data-custom-toggle-disable-on-blur="true" class="rd-navbar-toggle"><span></span></button><a href="index.html" class="rd-navbar-brand brand"><img src="images/logo.jpg" height="40px" style="height:40px;"></a>
                        </div>
                        <div class="rd-navbar-nav-wrap">
                            <div class="rd-navbar-nav-inner">
                                <ul class="rd-navbar-nav">
                                    <li><a href="survey.html">Take the Survey</a>
                                    </li>
                                    <li><a href="#">Results</a>
                                    </li>
                                    <li><a href="about.html">About</a>
                                    </li>
                                    <li><a href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <div class="questions">

        <div id="rootwizard">
            <div class="navbar navbar-default navbar-fixed-top" style="margin-top: 70px;">
                <div class="navbar-inner">
                    <div class="banner banner0"></div>
                    <div class="container" style="margin-top:20px;">
                        <div id="bar"  class="progress" style="margin-bottom: 0px">
                            <div class="progress-bar "  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
                        </div>
                        <div style="height:10px;font-size: 0.8em">
                            Step:<span class="stepNum">1</span>/<?php echo $qTypecount?>
                        </div>
                    </div>
                    <div class="container tabHeader">
                        <ul class="navTabs">
                            <?php $cqustnType=1;
                                while($qtype = mysqli_fetch_assoc($qustnType)) { ?>
                                    <li class="liTabs" data-tname="<?php echo $qtype['qstntype']; ?>"><a href="#tab<?php echo $cqustnType;?>" data-toggle="tab" class="tabS"></a></li>
                            <?php $cqustnType++; } ?>
                            <li class="namesHeader" id="tMainHeader" style="margin-left:35%;margin-bottom:0">Openness to Entrepreneurship</li>
                        </ul>

                    </div>

                </div>
            </div>


            <div class="tab-content" style="margin-top: 5%;width:100%">
               <?php
                  $cType=1;// for tab
                  $count=1; // for gobal
                  $oc=1;
                  $qCtype=getQuestionTypes();
                  while($qtype = mysqli_fetch_assoc($qCtype)) { // for question types ?>
                   <div class="tab-pane"id="tab<?php echo $cType?>">
                       <?php
                         $questions= getQuestions($qtype['id']);$qcount=mysqli_num_rows($questions);
                         $qc=1;
                         while($qstns = mysqli_fetch_assoc($questions)) { // for questions?>
                       <div class="q scrollposition<?php echo $count;?>">
                           <div class="row alertPostion<?php echo $count;?> questn" style="box-sizing: border-box">
                               <div class="col-lg-offset-1 col-lg-11" style="box-sizing: border-box;text-align: left;padding-left:0"><span class="qstnNumber" style="padding-right: 5px"><?php echo $cType;?>.<?php echo $qc;?></span> <?php echo $qstns['qstns'];?>
                               </div>
                           </div>
                           <?php $options=getOptions($qstns['qid']);  $oCount=mysqli_num_rows($options);?>

                           <ul>
                           <?php    while($optn = mysqli_fetch_assoc($options)) {  //for option ?>
                                <li>
                                    <input type="radio" id="f<?php echo $oc; ?>-option" name="selector<?php echo $count; ?>" class="choice" value="1">
                                    <label for="f<?php echo $oc; ?>-option"><?php echo $optn['options'];?>
                                    </label>

                                    <div class="check"></div>
                                </li>
                           <?php $oc++;}  // options end ?>

                           </ul>

                       </div>
                       <?php $count++; $qc++;} // questions end ?>
                   </div>
               <?php $cType++; } //questions types end ?>




                <ul class="pager wizard">
                    <li class="previous first" style="display:none;"><a href="#">First</a></li>
                    <li class="previous"><a href="#">Previous</a></li>
                    <li class="next last" style="display:none;"><a href="#">Last</a></li>
                    <li class="next"><a href="#">Next</a></li>
                </ul>
                <div style="text-align:center">
                    <button type="submit" class="btn btn-primary sbtBtn btn-md" style="display:none;background:#337ab7; border: none;">Submit</button>
                </div>
            </div>
        </div>

    </div>
    <section class="section-40 section-sm-60 bg-cello">
        <div class="shell">
            <div class="range range-xs-center">
                <div class="cell-xs-10 cell-sm-11 cell-md-12">
                    <div class="range">
                        <div class="cell-sm-6 cell-md-4">
                            <div class="inset-md-right-30">
                                <h6 class="text-uppercase text-big">About CEI</h6>
                                <p class="offset-top-27 text-bismark">
                                </p><p>
                                    The ODU Center for Enterprise Innovation (CEI) serves as a business-friendly entry point through which local startups, businesses, and organizations can engage the intellectual capital, world-class infrastructure, and cutting-edge technologies of ODU.</p>

                                <p>CEI supports local economic development to promote a thriving entrepreneurial environment. Our collection of integrated programs advance businesses and organizations in the area to become strong contributors to the economy, focusing ideally on ventures that show promise of becoming high-growth, high-impact enterprises that may create expanded employment opportunities for the local workforce, wealth for stakeholders, and social benefit to the region.</p>

                                <p></p>
                            </div>
                        </div>
                        <div class="cell-sm-6 cell-md-4 offset-top-50 offset-sm-top-0">
                            <h6 class="text-uppercase text-big">Quick links</h6>
                            <div style="max-width: 340px;" class="row offset-top-22 offset-md-top-30">
                                <div class="col-xs-6">
                                    <ul class="list-marked-variant-2">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Take the Survey</a></li>
                                    </ul>
                                </div>
                                <div class="col-xs-6">
                                    <ul class="list-marked-variant-2">
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="cell-sm-6 cell-md-4 offset-top-50 offset-md-top-0">
                            <h6 class="text-uppercase text-big">Subscribe</h6>
                            <div class="offset-top-22 offset-md-top-30">
                                <p class="text-bismark">Get the latest information from ODU Center for Enterprise Innovation.</p>
                                <form data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php" class="rd-mailform form-classic form-inline offset-top-15" novalidate="novalidate">
                                    <div class="form-group">
                                        <input id="contact-email" type="email" name="email" data-constraints="@Email @Required" class="form-control form-control-has-validation"><span class="form-validation"></span>
                                        <label for="contact-email" class="form-label rd-input-label">Enter Your E-mail</label>
                                    </div>
                                    <button type="submit" aria-label="Subscribe" class="btn btn-icon-only btn-primary"><span class="icon icon-xs icon-white fa-envelope-o"></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="page-foot section-15 bg-cloud-burst">
        <div class="shell text-center">
            <div class="range">
                <div class="cell-sm-12">
                    <p class="rights text-bismark"><span>©&nbsp;</span><span id="copyright-year">2018</span><span>Center for Enterprise Innovation</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</div>
<script src="js/survey.js"></script>


</body>

</html>
