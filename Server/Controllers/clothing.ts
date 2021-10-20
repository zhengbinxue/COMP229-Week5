import express, {Request, Response, NextFunction } from 'express';

import Clothing from "../Models/clothing";

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction){
    Clothing.find(function(err, clothingCollection){
        if(err){
            return console.error(err);
        }
        //render the clothing-list content partial page
        console.log(clothingCollection);
        res.render('index', {title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection})
    });
}
