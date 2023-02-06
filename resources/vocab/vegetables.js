const vegs = { en: { "0": "brussels sprouts", "1": "cabbage", "2": "carrot", "3": "celery", "4": "cucumber", "5": "eggplant", "6": "garlic", "7": "lettuce", "8": "mushrooms", "9": "onion", "10": "peas", "11": "pepper", "12": "potato", "13": "spinach", "14": "yam" }, ko: { "0": "\ube0c\ub93c\uc140 \ucf69\ub098\ubb3c", "1": "\uc591\ubc30\ucd94", "2": "\ub2f9\uadfc", "3": "\uc140\ub7ec\ub9ac", "4": "\uc624\uc774", "5": "\uac00\uc9c0", "6": "\ub9c8\ub298", "7": "\uc0c1\ucd94", "8": "\ubc84\uc12f", "9": "\uc591\ud30c", "10": "\uc644\ub450\ucf69", "11": "\ud6c4\ucd94", "12": "\uac10\uc790", "13": "\uc2dc\uae08\uce58", "14": "\uc58c" } }

export const vegetables = [{
    en: 'broccoli', ko: '\ube0c\ub85c\ucf5c\ub9ac', wordId: 15, mp3Path: `../recordings/broccoli_\ube0c\ub85c\ucf5c\ub9ac.mp3`,
    imgPath: `/resources/images/vegetables/broccoli/Image_1.jpg`
}]

const maxIter = Object.keys(vegs.en).length

for (let i = 0; i < maxIter; i++) {
    vegetables.push({
        en: vegs.en[i], ko: vegs.ko[i], mp3Path: `../recordings/${vegs.en[i]}_${vegs.ko[i]}.mp3`, wordId: i,
        imgPath: `/resources/images/vegetables/${vegs.en[i]}/Image_1.jpg`
    })
}