function Fireball(){
    var fireball = createSprite(player1.x, player1.y);
    fireball.addAnimation("fire", fireballImg);
    fireball.velocityX = 9;
    fireball.scale = -0.18;

    //** SHOOTING */
    if(keyWentDown("m") && fireCharge > 0){
        Fireball();
        player1.addImage(Gpower);
        fireCharge--;
        if(fireCharge === 0){
        cTime = frameCount;
        rTime = 100;
        }
    }
    if(frameCount === cTime + 100){
        fireCharge = 10;
    }
    
    rTime--;
}

function Waterball(){
    var waterball = createSprite(player2.x, player2.y);
    waterball.addAnimation("water",waterballImg);
    waterball.velocityX = 9;
    waterball.scale = -0.5;

    //** SHOOTING */
    if(keyWentDown(113) || keyWentDown(81) && waterCharge > 0){
        Waterball();
        player2.addImage(Vpower);
        waterCharge--;
        if(waterCharge === 0){
        wTime = frameCount;
        aTime = 100;
        }
    }
    if(frameCount === wTime + 100){
        waterCharge = 10;
    }

    aTime--;
}

function PickUp(){
    fill("red");

    if(keyDown("P") || keyDown("p")){
        if(player1.isTouching(plant2)){
            EnergyMeter1 += 30;
            plant2.destroy();
        }
        else if(player1.isTouching(plant1)){
            EnergyMeter1 += 30;
            plant1.destroy();
        }
        else if(player1.isTouching(book1)){
            EnergyMeter1 += 15;
            book1.destroy();
        }
        else if(player1.isTouching(book2)){
            EnergyMeter1 += 15;
            book2.destroy();
        }
        else if(player1.isTouching(book3)){
            EnergyMeter1 += 15;
            book3.destroy();
        }
        else if(player1.isTouching(book4)){
            EnergyMeter1 += 15;
            book4.destroy();
        }
        else if(player1.isTouching(book5)){
            EnergyMeter1 += 15;
            book5.destroy();
        }
        else if(player1.isTouching(pillow)){
            EnergyMeter1 += 10;
            pillow.destroy();
        }
        else if(player1.isTouching(chest)){
            EnergyMeter1 += 35;
            chest.destroy();
        }
        else if(player1.isTouching(apple)){
            EnergyMeter1 += 10;
            apple.destroy();
        }
        else if(player1.isTouching(bread)){
            EnergyMeter1 += 5;
            bread.destroy();
        }
        else if(player1.isTouching(mug)){
            EnergyMeter1 += 20;
            mug.destroy();
        }
        else if(player1.isTouching(ham)){
            EnergyMeter1 += 15;
            ham.destroy();
        }

    }

    if(keyDown("E") || keyDown("e")){
        if(player2.isTouching(plant2)){
            EnergyMeter1 += 30;
            plant2.destroy();
        }
        else if(player2.isTouching(plant1)){
            EnergyMeter1 += 30;
            plant1.destroy();
        }
        else if(player2.isTouching(book1)){
            EnergyMeter1 += 15;
            book1.destroy();
        }
        else if(player2.isTouching(book2)){
            EnergyMeter1 += 15;
            book2.destroy();
        }
        else if(player2.isTouching(book3)){
            EnergyMeter1 += 15;
            book3.destroy();
        }
        else if(player2.isTouching(book4)){
            EnergyMeter1 += 15;
            book4.destroy();
        }
        else if(player2.isTouching(book5)){
            EnergyMeter1 += 15;
            book5.destroy();
        }
        else if(player2.isTouching(pillow)){
            EnergyMeter1 += 10;
            pillow.destroy();
        }
        else if(player2.isTouching(chest)){
            EnergyMeter1 += 35;
            chest.destroy();
        }
        else if(player2.isTouching(apple)){
            EnergyMeter1 += 10;
            apple.destroy();
        }
        else if(player2.isTouching(bread)){
            EnergyMeter1 += 5;
            bread.destroy();
        }
        else if(player2.isTouching(mug)){
            EnergyMeter1 += 20;
            mug.destroy();
        }
        else if(player2.isTouching(ham)){
            EnergyMeter1 += 15;
            ham.destroy();
        }
    }

    if(plant2 !== undefined){
        
        ellipse(plant2.x, plant2.y, 100);
    }
}