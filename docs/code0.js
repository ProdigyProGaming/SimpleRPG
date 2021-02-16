gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];
gdjs.New_32sceneCode.GDTempPlayerObjects1= [];
gdjs.New_32sceneCode.GDTempPlayerObjects2= [];
gdjs.New_32sceneCode.GDTempPlayerObjects3= [];
gdjs.New_32sceneCode.GDSolidObjectObjects1= [];
gdjs.New_32sceneCode.GDSolidObjectObjects2= [];
gdjs.New_32sceneCode.GDSolidObjectObjects3= [];
gdjs.New_32sceneCode.GDShopInteractionObjects1= [];
gdjs.New_32sceneCode.GDShopInteractionObjects2= [];
gdjs.New_32sceneCode.GDShopInteractionObjects3= [];
gdjs.New_32sceneCode.GDShopBackgroundObjects1= [];
gdjs.New_32sceneCode.GDShopBackgroundObjects2= [];
gdjs.New_32sceneCode.GDShopBackgroundObjects3= [];
gdjs.New_32sceneCode.GDShopButtonObjects1= [];
gdjs.New_32sceneCode.GDShopButtonObjects2= [];
gdjs.New_32sceneCode.GDShopButtonObjects3= [];
gdjs.New_32sceneCode.GDShopButtonNameObjects1= [];
gdjs.New_32sceneCode.GDShopButtonNameObjects2= [];
gdjs.New_32sceneCode.GDShopButtonNameObjects3= [];
gdjs.New_32sceneCode.GDShopButtonStockLeftObjects1= [];
gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2= [];
gdjs.New_32sceneCode.GDShopButtonStockLeftObjects3= [];
gdjs.New_32sceneCode.GDShopButtonPriceObjects1= [];
gdjs.New_32sceneCode.GDShopButtonPriceObjects2= [];
gdjs.New_32sceneCode.GDShopButtonPriceObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTempPlayerObjects1Objects = Hashtable.newFrom({"TempPlayer": gdjs.New_32sceneCode.GDTempPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSolidObjectObjects1Objects = Hashtable.newFrom({"SolidObject": gdjs.New_32sceneCode.GDSolidObjectObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSolidObjectObjects1Objects = Hashtable.newFrom({"SolidObject": gdjs.New_32sceneCode.GDSolidObjectObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTempPlayerObjects1Objects = Hashtable.newFrom({"TempPlayer": gdjs.New_32sceneCode.GDTempPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopInteractionObjects1Objects = Hashtable.newFrom({"ShopInteraction": gdjs.New_32sceneCode.GDShopInteractionObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonObjects2Objects = Hashtable.newFrom({"ShopButton": gdjs.New_32sceneCode.GDShopButtonObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonObjects2Objects = Hashtable.newFrom({"ShopButton": gdjs.New_32sceneCode.GDShopButtonObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonNameObjects2Objects = Hashtable.newFrom({"ShopButtonName": gdjs.New_32sceneCode.GDShopButtonNameObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonStockLeftObjects2Objects = Hashtable.newFrom({"ShopButtonStockLeft": gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonPriceObjects1Objects = Hashtable.newFrom({"ShopButtonPrice": gdjs.New_32sceneCode.GDShopButtonPriceObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ShopButton"), gdjs.New_32sceneCode.GDShopButtonObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonObjects2Objects);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopBackground"), gdjs.New_32sceneCode.GDShopBackgroundObjects2);
/* Reuse gdjs.New_32sceneCode.GDShopButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ShopButtonName"), gdjs.New_32sceneCode.GDShopButtonNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("ShopButtonPrice"), gdjs.New_32sceneCode.GDShopButtonPriceObjects2);
gdjs.copyArray(runtimeScene.getObjects("ShopButtonStockLeft"), gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDShopButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopButtonObjects2[i].setPosition((( gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getPointX("Button" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonObjects2[i].getVariables().getFromIndex(0))))),(( gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getPointY("Button" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonObjects2[i].getVariables().getFromIndex(0))))));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDShopButtonNameObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopButtonNameObjects2[i].setPosition((( gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getPointX("Name" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonNameObjects2[i].getVariables().getFromIndex(0))))),(( gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getPointY("Name" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonNameObjects2[i].getVariables().getFromIndex(0))))));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2[i].setPosition((( gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getPointX("Name" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2[i].getVariables().getFromIndex(0))))),(( gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getPointY("Name" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2[i].getVariables().getFromIndex(0))))) + 25);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDShopButtonPriceObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopButtonPriceObjects2[i].setPosition((( gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getPointX("Name" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonPriceObjects2[i].getVariables().getFromIndex(0))))),(( gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getPointY("Name" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonPriceObjects2[i].getVariables().getFromIndex(0))))) + 50);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopButton"), gdjs.New_32sceneCode.GDShopButtonObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonObjects2Objects);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDShopButtonObjects2 */
gdjs.copyArray(gdjs.New_32sceneCode.GDShopInteractionObjects1, gdjs.New_32sceneCode.GDShopInteractionObjects2);

{for(var i = 0, len = gdjs.New_32sceneCode.GDShopButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopButtonObjects2[i].setAnimationName("Shop" + (gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDShopInteractionObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDShopInteractionObjects2[0].getVariables()).getFromIndex(0))) + "Item" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonObjects2[i].getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopButtonName"), gdjs.New_32sceneCode.GDShopButtonNameObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonNameObjects2Objects);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopBackground"), gdjs.New_32sceneCode.GDShopBackgroundObjects2);
/* Reuse gdjs.New_32sceneCode.GDShopButtonNameObjects2 */
gdjs.copyArray(gdjs.New_32sceneCode.GDShopInteractionObjects1, gdjs.New_32sceneCode.GDShopInteractionObjects2);

{for(var i = 0, len = gdjs.New_32sceneCode.GDShopButtonNameObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopButtonNameObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getVariables()).getFromIndex(0).getChild("Shop" + (gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDShopInteractionObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDShopInteractionObjects2[0].getVariables()).getFromIndex(0)))).getChild("Item" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonNameObjects2[i].getVariables().getFromIndex(0)))).getChild("Name"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopButtonStockLeft"), gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonStockLeftObjects2Objects);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopBackground"), gdjs.New_32sceneCode.GDShopBackgroundObjects2);
/* Reuse gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2 */
gdjs.copyArray(gdjs.New_32sceneCode.GDShopInteractionObjects1, gdjs.New_32sceneCode.GDShopInteractionObjects2);

{for(var i = 0, len = gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDShopBackgroundObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDShopBackgroundObjects2[0].getVariables()).getFromIndex(0).getChild("Shop" + (gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDShopInteractionObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDShopInteractionObjects2[0].getVariables()).getFromIndex(0)))).getChild("Item" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2[i].getVariables().getFromIndex(0)))).getChild("StockLeft"))) + " remaining");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopButtonPrice"), gdjs.New_32sceneCode.GDShopButtonPriceObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopButtonPriceObjects1Objects);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ShopBackground"), gdjs.New_32sceneCode.GDShopBackgroundObjects1);
/* Reuse gdjs.New_32sceneCode.GDShopButtonPriceObjects1 */
/* Reuse gdjs.New_32sceneCode.GDShopInteractionObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDShopButtonPriceObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDShopButtonPriceObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDShopBackgroundObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDShopBackgroundObjects1[0].getVariables()).getFromIndex(0).getChild("Shop" + (gdjs.RuntimeObject.getVariableString(((gdjs.New_32sceneCode.GDShopInteractionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDShopInteractionObjects1[0].getVariables()).getFromIndex(0)))).getChild("Item" + (gdjs.RuntimeObject.getVariableString(gdjs.New_32sceneCode.GDShopButtonPriceObjects1[i].getVariables().getFromIndex(0)))).getChild("Price"))) + " coins");
}
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "CollisionLayer");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "ShopUI");
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "ShopUI");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ShopUI");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SolidObject"), gdjs.New_32sceneCode.GDSolidObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("TempPlayer"), gdjs.New_32sceneCode.GDTempPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTempPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSolidObjectObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDSolidObjectObjects1 */
/* Reuse gdjs.New_32sceneCode.GDTempPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDTempPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTempPlayerObjects1[i].separateFromObjectsList(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDSolidObjectObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopInteraction"), gdjs.New_32sceneCode.GDShopInteractionObjects1);
gdjs.copyArray(runtimeScene.getObjects("TempPlayer"), gdjs.New_32sceneCode.GDTempPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTempPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDShopInteractionObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "ShopUI");
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDTempPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDTempPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDTempPlayerObjects3.length = 0;
gdjs.New_32sceneCode.GDSolidObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDSolidObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDSolidObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDShopInteractionObjects1.length = 0;
gdjs.New_32sceneCode.GDShopInteractionObjects2.length = 0;
gdjs.New_32sceneCode.GDShopInteractionObjects3.length = 0;
gdjs.New_32sceneCode.GDShopBackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDShopBackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDShopBackgroundObjects3.length = 0;
gdjs.New_32sceneCode.GDShopButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDShopButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDShopButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDShopButtonNameObjects1.length = 0;
gdjs.New_32sceneCode.GDShopButtonNameObjects2.length = 0;
gdjs.New_32sceneCode.GDShopButtonNameObjects3.length = 0;
gdjs.New_32sceneCode.GDShopButtonStockLeftObjects1.length = 0;
gdjs.New_32sceneCode.GDShopButtonStockLeftObjects2.length = 0;
gdjs.New_32sceneCode.GDShopButtonStockLeftObjects3.length = 0;
gdjs.New_32sceneCode.GDShopButtonPriceObjects1.length = 0;
gdjs.New_32sceneCode.GDShopButtonPriceObjects2.length = 0;
gdjs.New_32sceneCode.GDShopButtonPriceObjects3.length = 0;

gdjs.New_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
