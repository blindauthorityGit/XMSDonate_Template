// import { colors } from "./index";

function switcher(e) {
    switch (e) {
        case e < 75:
            return colors.kugeln[0].kugel1;
            break;
        case e >= 75 && e < 150:
            return colors.kugeln[1].kugel2;
            break;
        case e >= 150 && e < 225:
            return colors.kugeln[2].kugel3;
            break;
    }
}

function dataFiller() {
    const arr = Array(256).fill({
        id: 0,
        claimed: true,
        name: "Christine Buchner",
        sum: 15,
        color: colors.bgColors[0],
        comment: "Ich spende gerne viel",
    });

    return arr.map((e, i) => {
        let obj = new Object();
        let random = Math.floor(Math.random() * 4);

        obj = {
            id: i,
            claimed: true,
            name: i < 75 ? "Christine Buchner" : "Bubu Bernhardt",
            sum: 15,
            color: colors.bgColors[random],
            // color: i < 75 ? colors.kugeln[0].kugel1 : colors.kugeln[1].kugel2,
            comment: "Ich spende gerne viel",
        };
        e = obj;
        return e;
    });
}

const colors = {
    background: "#fff",
    primaryColor: "#7d866f",
    bgColors: ["rgb(235, 69, 17)", "rgb(220, 223, 220)", "rgb(0, 0, 0)", "rgb(255, 255, 255)"],
    kugeln: ["#870F3B", "#335381", "#F26522", "#ED1C24", "#FFF200"],
    baum: "#04151F",
};

const TestData = [
    {
        id: 0,
        claimed: true,
        name: "Christine Buchner",
        sum: 515,
        color: colors.kugeln[0],
        comment: "Ich spende gerne viel",
    },
    {
        id: 2,
        claimed: true,
        name: "Johannes Buchner",
        sum: 7755,
        color: colors.kugeln[4],
        comment: "Viel Glück und Erfolg!",
    },
    {
        id: 5,
        claimed: true,
        name: "Johannes Buchner",
        sum: 7755,
        color: colors.kugeln[2],
        comment: "Viel Glück und Erfolg!",
    },
    {
        id: 10,
        claimed: true,
        name: "Sandra Löbl",
        sum: 55,
        color: colors.kugeln[1],
    },
    {
        id: 13,
        claimed: true,
        name: "Marc Werner",
        sum: 35,
        color: colors.kugeln[2],
        comment: "Frohe Weihnachten!",
    },
    {
        id: 16,
        claimed: true,
        name: "Bubu Bernhard",
        sum: 35,
        color: colors.kugeln[3],
    },
    {
        id: 21,
        claimed: true,
        name: "Edeltraud Wippenberger",
        sum: 35,
        color: colors.kugeln[1],
        comment: "Shut up and take my money!",
    },
    {
        id: 25,
        claimed: true,
        name: "Edeltraud Wippenberger",
        sum: 135,
        color: colors.kugeln[1],
        comment: "Shut up and take my money!",
    },
    {
        id: 28,
        claimed: true,
        name: "Edeltraud Wippenberger",
        sum: 335,
        color: colors.kugeln[3],
        comment: "Shut up and take my money!",
    },
    {
        id: 30,
        claimed: true,
        name: "Santa Clause",
        sum: 35,
        color: colors.kugeln[0],
    },
    {
        id: 35,
        claimed: true,
        name: "Dr. Herbert Schuh",
        sum: 35,
        color: colors.kugeln[2],
    },
    {
        id: 39,
        claimed: true,
        name: "Christ Kind",
        sum: 35,
        color: colors.kugeln[2],
    },
];

export { TestData, dataFiller };
