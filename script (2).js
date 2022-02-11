        var clickerCost = 15   
        var workerCost = 100
        var coins = 0;
        var clickers = 0;
        var workers = 0;
        var clickingPower = 1;
        var coinspersecond = 0;
        var factoryCost = 1000;
        var factories = 0;
        var hammers = 0;
        var hammerCost = 10000;

                function buyHammer(){
                if(coins>=hammerCost){
                        coins = coins - hammerCost;
                        hammers = hammers + 1;
                        hammerCost=Math.round(hammerCost*1.15);

                document.getElementById("coins").innerHTML=coins;

                document.getElementById("hammerCost").innerHTML=hammerCost;
                
                document.getElementById("hammers").innerHTML=hammers;

                updateCoinsPerClick()

                                
        


                }
        }

            function buyfactory(){
                if(coins>=factoryCost){
                        coins = coins - factoryCost;
                        factories = factories + 1;
                        factoryCost=Math.round(factoryCost*1.15);

                document.getElementById("coins").innerHTML=coins;

                document.getElementById("factoryCost").innerHTML=factoryCost;
                
                document.getElementById("factories").innerHTML=factories;

                updateCoinsPerSecond()

                                
        


                }
        }

        function buyClicker(){
                if(coins>=clickerCost){
                        coins = coins - clickerCost;
                        clickers = clickers + 1;
                        clickerCost=Math.round(clickerCost*1.15);

                document.getElementById("coins").innerHTML=coins;

                document.getElementById("clickerCost").innerHTML=clickerCost;
                
                document.getElementById("clickers").innerHTML=clickers;

                updateCoinsPerSecond()

                                
        


                }
        }
        function buyworkers(){
                if(coins>=workerCost){
                        coins = coins - workerCost;
                        workers = workers + 1;
                        workerCost=Math.round(workerCost*1.15);

                document.getElementById("coins").innerHTML=coins;

                document.getElementById("workerCost").innerHTML=workerCost;
                
                document.getElementById("workers").innerHTML=workers;

                updateCoinsPerSecond()


                }
        }
       
        function addToCoins(amount) {
                coins = coins + amount;
                document.getElementById("coins").innerHTML = coins;
        }
        function updateCoinsPerSecond(){
                document.getElementById("coins-Per-Second").innerHTML = coinspersecond;
                coinspersecond = clickers + workers*5 + factories*70;
        }   
        function updateCoinsPerClick(){
                document.getElementById("coins-Per-Click").innerHTML = clickingPower;
                clickingPower = clickingPower + hammers;
        }
      
   
        setInterval (function(){
               
                coins = coins + clickers;
                coins = coins + workers*5;
                coins = coins + factories*70;


         
                document.title = coins +"a generic clicker";
                document.getElementById("coins").innerHTML = coins;
        }, 1000); // 1000ms = 1 second

        function saveGame(){
                var gameSave={
                        coins:coins,
                        clickerCost:clickerCost,
                        clickers:clickers,
                        clickingPower:clickingPower,
                        factories:factories,
                        factoryCost:factoryCost,
                        workerCost:workerCost,
                        workers:workers,
                        hammerCost:hammerCost,
                        hammers:hammers

                };
                localStorage.setItem("gameSave",JSON.stringify(gameSave));
        }
        setInterval(function()    {
                saveGame();
        }, 30000);    
        function loadGame(){
                var savedGame = JSON.parse(localStorage.getItem("gameSave"));
                if (typeof savedGame.coins !== "undefined")coins = savedGame.coins;
                if (typeof savedGame.clickerCost !== "undefined")clickerCost = savedGame.clickerCost;
                if (typeof savedGame.clickers !== "undefined")clickers = savedGame.clickers;
                if (typeof savedGame.workerCost !== "undefined")workerCost = savedGame.workerCost;
                if (typeof savedGame.workers !== "undefined")workers = savedGame.workers;
                if (typeof savedGame.factories !== "undefined")factories = savedGame.factories;
                if (typeof savedGame.factoryCost !== "undefined")factoryCost = savedGame.factoryCost
                if (typeof savedGame.clickingPower !== "undefined")clickingPower = savedGame.clickingPower
                if (typeof savedGame.hammers !== "undefined")hammers = savedGame.hammers;
                if (typeof savedGame.hammerCost !== "undefined")hammerCost = savedGame.hammerCost

        }           
        window.onload = function(){
                loadGame();
                updateCoinsPerSecond();
                document.getElementById("coins").innerHTML=coins;

                document.getElementById("workerCost").innerHTML=workerCost;
                
                document.getElementById("workers").innerHTML=workers;  

                document.getElementById("clickerCost").innerHTML=clickerCost;
                
                document.getElementById("clickers").innerHTML=clickers;    

                document.getElementById("factoryCost").innerHTML=factoryCost;
                
                document.getElementById("factories").innerHTML=factories; 

                document.getElementById("hammerCost").innerHTML=hammerCost;
                
                document.getElementById("hammers").innerHTML=hammers;          

        };
        document.addEventListener("keydown", function(event){
                if (event.ctrlKey && event.which == 83) 
                event.preventDefault();
                saveGame();
        }, false);
        function resetGame(){
                if (confirm("are you sure you want to reset your game")){
                var gameSave = {};
                localStorage.setItem("gameSave", JSON.stringify(gameSave));
                location.reload();
                }
        }
        document.addEventListener("keydown", function(event){
                if (event.which == 82) 
                        resetGame();
                },);
        var game = {
                coins:0,
                totalCoins: 0,
                totalClicks:0,
                clickValue:1,
                version:0.000,

                addToCoins: function(amount){
                        this.coins += amount;
                        this.totalcoins += amount;
                        display.updateCoins();
                }
        };
        var building = {
                name:[
                "clicker",
                "worker",
                "factory"

                ],image:[
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbS_pNpcNBaDpmjJC7AP1pM_6oDQwsiZ-66PUaJ04Q7oc0QRD4UXaZInnA9MUD83F13Fw:clipart-library.com/images_k/mouse-cursor-transparent/mouse-cursor-transparent-18.png&usqp=CAU",

                     "https://www.clipartman.com/png/middle/69-690076_transparent-background-businessman-clipart-collection-clip-art-business-man.png",

                     "https://media.istockphoto.com/vectors/refinery-icon-oil-an-gas-icon-elements-premium-quality-graphic-design-vector-id960531516?k=20&m=960531516&s=612x612&w=0&h=rQZCJ3A0OGjLCTxdDtInds2bYPMYCKf9HMaIs_fOsec="
                ],
                count: [0, 0, 0],
                income:[
 
               ],
               cost: [
               ]
        };
        


        var display = {
                updatecoins: function(){
                document.getElementById("coins").innerHTML = game.coins;
                document.title = game.coins +  "  coins - a generic clicker";
                }
                
        };
      