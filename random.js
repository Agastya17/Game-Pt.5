function Fireball(){
    var fireball = createSprite(player1.x, player1.y);
    fireball.addAnimation("fire", fireballImg);
    fireball.velocityX = 9;
    fireball.scale = -0.18;
}

function Waterball(){
    var waterball = createSprite(player2.x, player2.y);
    waterball.addAnimation("water",waterballImg);
    waterball.velocityX = 9;
    waterball.scale = -0.5;
}

function PickUp(){
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
}