const food_words = { en: { "0": "bread", "1": "cake", "2": "candy", "3": "cheese", "4": "chicken", "5": "chocolate", "6": "coffee", "7": "cola", "8": "cookie", "9": "crackers", "10": "croissant", "11": "doughnut", "12": "egg", "13": "ginger", "14": "hamburger", "15": "honey", "16": "hot dog", "17": "ice cream", "18": "juice", "19": "lentil", "20": "milk", "21": "muffin", "22": "oyster", "23": "pancake", "24": "parsley", "25": "pickle", "26": "pizza", "27": "popcorn", "28": "porridge", "29": "potato chip", "30": "salad", "31": "sandwich", "32": "sausage", "33": "shrimp", "34": "soup", "35": "spaghetti", "36": "steak", "37": "sundae", "38": "sushi", "39": "tea", "40": "wine" }, ko: { "0": "\ube75", "1": "\ucf00\uc774\ud06c", "2": "\uc0ac\ud0d5", "3": "\uce58\uc988", "4": "\ub2ed", "5": "\ucd08\ucf5c\ub9bf", "6": "\ucee4\ud53c", "7": "\ucf5c\ub77c", "8": "\ucfe0\ud0a4", "9": "\ud638\ub450 \uae4c\ub294 \uae30\uad6c", "10": "\ud06c\ub85c\uc640\uc0c1", "11": "\ub3c4\ub11b", "12": "\uacc4\ub780", "13": "\uc0dd\uac15", "14": "\ud584\ubc84\uac70", "15": "\uafc0", "16": "\ud56b\ub3c4\uadf8", "17": "\uc544\uc774\uc2a4\ud06c\ub9bc", "18": "\uc8fc\uc2a4", "19": "Lentil", "20": "\uc6b0\uc720", "21": "\uba38\ud540", "22": "\uad74", "23": "\ud32c\ucf00\uc774\ud06c", "24": "\ud30c\uc2ac\ub9ac", "25": "\uac04\ubb3c", "26": "\ud53c\uc790", "27": "\ud31d\ucf58", "28": "\uc624\ud2b8\ubc00 \uc8fd", "29": "\uac10\uc790 \uce69", "30": "\uc0d0\ub7ec\ub4dc", "31": "\uc0cc\ub4dc\uc704\uce58", "32": "\uc18c\uc2dc\uc9c0", "33": "\uc0c8\uc6b0", "34": "\uc218\ud504", "35": "\uc2a4\ud30c\uac8c\ud2f0", "36": "\uc2a4\ud14c\uc774\ud06c", "37": "\uc21c\ub300", "38": "\ud68c", "39": "\ucc28", "40": "\uc640\uc778" } }

export const food = [{ en: 'beans', ko: '\ucf69', wordId: 41, mp3Path: `/resources/recordings/beans_\ucf69.mp3`, imgPath: `/resources/images/food/beans/Image_1.jpg` }]

const maxIter = Object.keys(food_words.en).length

for (let i = 0; i < maxIter; i++) {
    food.push({
        en: food_words.en[i], ko: food_words.ko[i], mp3Path: `/resources/recordings/${food_words.en[i]}_${food_words.ko[i]}.mp3`, wordId: i,
        imgPath: `/resources/images/food/${food_words.en[i]}/Image_1.jpg`
    })
}
