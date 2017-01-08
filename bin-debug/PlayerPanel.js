var panelConfig = [
    { name: "bg", image: "bg_jpg", x: 0, y: 0 },
];
var heroConfig = [
    { name: "hero_0", image: "hero_0_jpg", x: 0, y: 0 }
];
var equipmentConfig = [
    { name: WeaponConfig[0].name, image: WeaponConfig[0].image, x: 0, y: 150 }
];
var jewelConfig = [
    { name: JewelConfig[0].name, image: JewelConfig[0].image, x: 0, y: 200 }
];
//目前状态：穿戴的武器显示不出来
var PlayerPanel = (function (_super) {
    __extends(PlayerPanel, _super);
    function PlayerPanel(stage, player) {
        _super.call(this);
        this.weapon = [];
        this.weapon_desc = [];
        this.player = player;
        this.bg = new egret.Bitmap();
        this.hero = new egret.Bitmap();
        this.weapon.push(new egret.Bitmap());
        //this.jewel.push(new egret.Bitmap());
        //this.player_desc = new egret.TextField();
        this.hero_desc = new egret.TextField();
        this.weapon_desc.push(new egret.TextField());
        //this.jewel_desc.push(new egret.TextField());
        //this.help = new egret.TextField();
        this.body = new egret.Shape();
        this.addChild(this.bg);
        this.addChild(this.hero);
        //stage.addChild(this.jewel);
        //stage.addChild(this.player_desc);
        this.addChild(this.hero_desc);
        //stage.addChild(this.weapon_desc);
        //stage.addChild(this.jewel_desc);
        //this.addChild(this.help);
        this.setPanel();
        //this.setButton();
        this.touchEnabled = true;
    }
    var d = __define,c=PlayerPanel,p=c.prototype;
    p.addWeapon = function () {
        this.weapon.push(new egret.Bitmap());
    };
    p.updatePlayer = function (player) {
        this.player = player;
    };
    p.setPanel = function () {
        //console.log("武器数量："+this.player.heroesInTeam.getWeapon.length);
        for (var i = 0; i < this.player.heroesInTeam.weapons.length; i++) {
            this.weapon[i] = new egret.Bitmap();
            this.addChild(this.weapon[i]);
            console.log("武器数量：" + this.player.heroesInTeam.weapons.length);
        }
        //for(var i = 0;i<this.jewel.length;i++){
        //    this.addChild(this.jewel[i]);
        //}
        for (var i = 0; i < this.player.heroesInTeam.weapons.length; i++) {
            this.weapon_desc[i] = new egret.TextField();
            this.addChild(this.weapon_desc[i]);
        }
        //for(var i = 0;i<this.jewel_desc.length;i++){
        //    this.addChild(this.jewel_desc[i]);
        //}
        this.bg.texture = RES.getRes(panelConfig[0].image);
        this.bg.x = panelConfig[0].x;
        this.bg.y = panelConfig[0].y;
        this.bg.width = 200;
        this.bg.height = 300;
        this.hero.texture = RES.getRes(heroConfig[0].image);
        this.hero.x = heroConfig[0].x;
        this.hero.y = heroConfig[0].y;
        this.hero.width = 100;
        this.hero.height = 150;
        for (var i = 0; i < this.player.heroesInTeam.weapons.length; i++) {
            this.weapon[i].texture = RES.getRes(equipmentConfig[0].image);
            this.weapon[i].x = equipmentConfig[0].x;
            this.weapon[i].y = equipmentConfig[0].y + i * 100;
        }
        //for(var i = 0;i<this.jewel.length;i++){
        //    this.jewel[i].texture = RES.getRes(jewelConfig[0].image);
        //    this.jewel[i].x = jewelConfig[0].x;
        //    this.jewel[i].y = jewelConfig[0].y;
        //}
        for (var i = 0; i < this.player.heroesInTeam.weapons.length; i++) {
            this.weapon_desc[i].text = "武器：" + this.player.heroesInTeam.weapons[i].name
                + " \n稀有度：" + this.player.heroesInTeam.weapons[i].quality
                + " \n攻击力：" + this.player.heroesInTeam.weapons[i].attack
                + " \n战斗力：" + this.player.heroesInTeam.weapons[i].fightPower;
            this.weapon_desc[i].x = equipmentConfig[0].x + this.weapon[i].width;
            this.weapon_desc[i].y = equipmentConfig[0].y + i * 100;
            this.weapon_desc[i].size = 16;
        }
        //for(var i = 0;i<this.jewel_desc.length;i++){
        //    this.jewel_desc[i].text = "宝石：" + this.Hero.weapons[0].jewels[0].name
        //    + " \n稀有度：" + this.Hero.weapons[i].jewels[0].quality
        //    + " \n攻击力：" + this.Hero.weapons[i].jewels[0].attack
        //    + " \n战斗力：" + this.Hero.weapons[i].jewels[0].fightPower;
        //    this.jewel_desc[i].x = jewelConfig[0].x + this.jewel[i].width;
        //    this.jewel_desc[i].y = jewelConfig[0].y;
        //    this.jewel_desc[i].size = 16;
        //}
        this.hero_desc.text = "英雄：" + this.player.heroesInTeam.name
            + " \n等级：" + this.player.heroesInTeam.level
            + " \n最大生命值：" + this.player.heroesInTeam.maxHp
            + " \n攻击力：" + this.player.heroesInTeam.attack
            + " \n战斗力：" + this.player.heroesInTeam.fightPower;
        this.hero_desc.x = heroConfig[0].x + this.hero.width;
        this.hero_desc.y = heroConfig[0].y;
        this.hero_desc.size = 16;
        //this.help.text = "点击查看武器和镶嵌的宝石信息";
        //this.help.x = equipmentConfig[0].x;
        //this.help.y = equipmentConfig[0].y - this.weapon[0].height;
        //this.help.size = 16;
    };
    return PlayerPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(PlayerPanel,'PlayerPanel');
//# sourceMappingURL=PlayerPanel.js.map