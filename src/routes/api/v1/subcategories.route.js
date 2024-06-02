const express  = require("express");
const { subcategoriesControler } = require("../../../controller");
const router = express.Router();

router.get(
    "/list-subcategories",
    subcategoriesControler.listSubCategories
)

router.get(
    "/list-subcategories/:subcategory_id",
    subcategoriesControler.getsubCategory
)

router.post(
    "/add-subcategory/:subcategory_id",
    subcategoriesControler.addSubSubCategory
)

router.put(
    "/update-subcategory/:subcategory_id",
    subcategoriesControler.updateSubSubCategory
)

router.delete(
    "/delete-subcategory/:subcategory_id",
    subcategoriesControler.deleteSubSubCategory
)

module.exports = router;