// main.js

import { Body, Text, HStack, VStack, Spacer, Circle, Image, ZStack, ScrollView } from "./jysuis.js";


document.addEventListener("DOMContentLoaded", () => {
    const windowElement = document.body; // Remplacez par l'ID de votre élément

    // Fonction pour répéter le cycle d'apparition et de disparition
    const repeatAnimation = () => {
        windowElement.classList.add("fade-in");
        windowElement.classList.remove("fade-out");

        setTimeout(() => {
            windowElement.classList.add("fade-out");
            windowElement.classList.remove("fade-in");

            // Répéter après la fin de l'animation de disparition
            setTimeout(repeatAnimation, 5000); // 1 seconde pour la durée de l'animation fadeOut
        }, 10000); // 5 secondes avant de commencer à disparaître
    };

    repeatAnimation();
});


const circlesComponent = 
    HStack(
        Spacer(),
        ZStack(
            Circle()
                .foregroundColor("green")
                .onClick(() => alert('One Clicked')),
            Text("1").fontSize("50px")
                .onClick(() => alert('One Clicked')),

        ),
        Spacer(),
        ZStack(
            Circle().foregroundColor("red"),
            Text("2").fontSize("50px"),
        ),
        Spacer(),
        ZStack(
            Circle().foregroundColor("blue"),
            Text("3").fontSize("50px"),
        ),
        Spacer(),
    )


Body(
    Spacer(),
    HStack(
        Spacer(),
            Image('logo.svg')
                .width('200px')
                .animateHeartbeat()
                .onClick(() => alert('Aïe Saperlipopette !')),
        Spacer(),
    ),

    Spacer(),
    Text("cravics.com")
        .fontSize("50px")
        .fontFamily('Luckiest Guy')
        .foregroundColor("orange"),
    Text("the escape game of your life")
        .fontFamily('Reenie Beanie')
        .fontSize('30px'),
    Spacer(),
    Spacer(),
)







