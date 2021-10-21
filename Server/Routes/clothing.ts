import express from 'express';
const router = express.Router();
export default router;

//create an clothing controller instance
import { DisplayClothingListPage, DisplayEditPage } from '../Controllers/clothing';


// get clothing-list page - with / clothing-list
router.get('/', DisplayClothingListPage);
// display edit page - with / clothing-list/edit:id
router.get('/edit/:id', DisplayEditPage);
