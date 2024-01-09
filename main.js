// main.js

import { Body, Text, HStack, VStack, Spacer, Circle, Image, ZStack, ScrollView } from "./jysuis.js";


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
                .onClick(() => alert('Aïe Saperlipopette !')),
        Spacer(),
    ),

    Spacer(),
    Text("SOS CRAVING")
        .fontSize("50px")
        .fontFamily('Luckiest Guy')
        .foregroundColor("orange"),
    Text("ne cherchez plus la sortie !")
        .fontFamily('Reenie Beanie')
        .fontSize('30px'),
    Spacer(),
    Spacer(),
)







