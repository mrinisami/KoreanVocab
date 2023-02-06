import { appliances } from "./appliances";
import { bodyParts } from "./body_parts";
import { food } from "./food";
import { fruit } from "./fruit";
import { vegetables } from "./vegetables";

export const imageWordsByCategory = {'Appliances': appliances, 'Body Parts': bodyParts, 'Food': food, 'Fruit': fruit, 'Vegetables': vegetables}
imageWordsByCategory.all = []

Object.keys(imageWordsByCategory).forEach((key) => {
    imageWordsByCategory[key].forEach((word) => {
        imageWordsByCategory.all.push(word)
    })
})