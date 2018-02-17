<html>
<head>
    <meta charset="UTF-8">
    <title>Survey</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script type='text/javascript' src='//code.jquery.com/jquery-1.9.1.js'></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type='text/javascript' src="http://d3js.org/d3.v3.min.js"></script>
    <link rel="stylesheet" href="css/styleSurvey.css">
    <link rel="stylesheet" href="css/style.css">


    <style>

    body{
        background: #fff;
    }

    #holder{
        overflow:hidden;
    }
    .concentric{
        float:left;
    }

    .concentricchart path {
        stroke: #cccccc;
        stroke-width: 1px;
        opacity:0.8;
    }

    .concentricchart text{
        font-size:12px;
    }

    .legend_group circle{
        stroke: #cccccc;
        stroke-width: 1px;
        opacity:0.8;
    }
   </style>
</head>

<body>
<div class="page container">

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

    <div id="holder" style="margin-top: 7%">

         <p style="text-align: left;padding-left: 40px">Your score</p>
        <div class="concentric" data-role="concentric" data-width=500 data-height=660 data-thickness=15></div>
        <p style="text-align: center">Expert score</p>
        <div class="concentric" data-role="concentric" data-width=420 data-height=500 data-thickness=15></div>
    </div>

</div>

<script type='text/javascript' src="js/d3script.js"></script>
</body>
</html>