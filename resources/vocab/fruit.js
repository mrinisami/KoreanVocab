const fruit_words = { en: { "0": "avocado", "1": "banana", "2": "berry", "3": "cherry", "4": "grapes", "5": "kiwi", "6": "lemon", "7": "lime", "8": "mango", "9": "olive", "10": "orange", "11": "peach", "12": "pear", "13": "pineapple", "14": "strawberry", "15": "tomato", "16": "watermelon" }, ko: { "0": "\uc544\ubcf4\uce74\ub3c4", "1": "\ubc14\ub098\ub098", "2": "\ub9d0\ub9b0 \uc528\uc557", "3": "\uccb4\ub9ac", "4": "\ud3ec\ub3c4", "5": "\ud0a4\uc704", "6": "\ub808\ubaac", "7": "\ub77c\uc784", "8": "\ub9dd\uace0", "9": "\uc62c\ub9ac\ube0c", "10": "\uc8fc\ud669\uc0c9", "11": "\ubcf5\uc22d\uc544", "12": "\ubc30", "13": "\ud30c\uc778\uc560\ud50c", "14": "\ub538\uae30", "15": "\ud1a0\ub9c8\ud1a0", "16": "\uc218\ubc15" } }

export const fruit = [{ en: 'apple', ko: '\uc0ac\uacfc', wordId: 17, mp3Path: `/resources/recordings/apple_\uc0ac\uacfc.mp3`, imgPath: `/resources/images/fruit/apple/Image_1.jpg` }]

const maxIter = Object.keys(fruit_words.en).length

for (let i = 0; i < maxIter; i++) {
    fruit.push({
        en: fruit_words.en[i], ko: fruit_words.ko[i], mp3Path: `/resources/recordings/${fruit_words.en[i]}_${fruit_words.ko[i]}.mp3`, wordId: i,
        imgPath: `/resources/images/fruit/${fruit_words.en[i]}/Image_1.jpg`
    })
}
