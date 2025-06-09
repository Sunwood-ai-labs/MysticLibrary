
# Three.jsワイヤーアートゲーム 技術スタックプロンプト モノクロ版 V2

## 🖤 **メイン技術スタック**

### **Three.js (3Dエンジン) + 高度ワイヤーフレーム描画技術**
```javascript
// 汎用ワイヤーフレーム生成システム
const createWireframe = (geometry, opacity = 1, linewidth = 1) => {
    const edges = new THREE.EdgesGeometry(geometry);
    return new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ 
        color: 0x000000, opacity, transparent: opacity < 1, linewidth
    }));
};

const createMesh = (geometry, opacity = 1) => {
    return new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ 
        color: 0x000000, wireframe: true, opacity, transparent: opacity < 1 
    }));
};

const createLine = (points, opacity = 1) => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geometry, new THREE.LineBasicMaterial({ 
        color: 0x000000, opacity, transparent: opacity < 1 
    }));
};

const radialPattern = (count, radius, height = 0, func) => {
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        func(x, height, z, angle, i);
    }
};
```

## ⚫ **モノクロ階層アーキテクチャ**

### **1. グレースケール階層システム**
- **黒（#000000）**: 主要構造線、プレイヤー、重要オブジェクト
- **濃グレー（#333333）**: 敵・障害物・インタラクティブ要素
- **中グレー（#666666）**: 背景構造・環境オブジェクト
- **薄グレー（#999999）**: 遠景・補助線・UI要素
- **白（#FFFFFF）**: ハイライト・エフェクト・フィードバック

### **2. 深度別オパシティ制御**
```javascript
// 距離による自動階調調整
const depthBasedOpacity = (distance, maxDistance) => {
    const intensity = Math.max(0.1, Math.min(1, 1 - (distance / maxDistance)));
    return intensity;
};

// レイヤー重要度による表示制御
const layerPriority = {
    critical: { opacity: 0.9, color: 0x000000 },    // プレイヤー・敵
    important: { opacity: 0.7, color: 0x333333 },   // ゲームオブジェクト
    environmental: { opacity: 0.5, color: 0x666666 }, // 環境・背景
    atmospheric: { opacity: 0.3, color: 0x999999 }    // 装飾・エフェクト
};
```

## 🔲 **汎用グリッド & 空間構造システム**

### **マルチレイヤーグリッド基盤**
```javascript
function createUniversalGridSystem() {
    const gridConfigs = [
        { size: 60, divisions: 120, opacity: 0.15, type: 'orthogonal' },
        { size: 60, divisions: 60, opacity: 0.25, type: 'orthogonal' },
        { radius: 30, segments: 72, opacity: 0.2, type: 'radial' },
        { rings: 15, maxRadius: 30, opacity: 0.4, type: 'concentric' },
        { spacing: 3, shape: 'hexagon', opacity: 0.15, type: 'tessellation' }
    ];
    
    // どんなゲームジャンルでも使える基盤グリッド
    // 2D平面・3D空間・球面・円筒座標系対応
}
```

### **プロシージャル空間生成**
```javascript
// ゲームジャンル問わず使える空間構造
function createGameSpace(type, parameters) {
    switch(type) {
        case 'arena':     // 戦闘・スポーツゲーム用
        case 'dungeon':   // RPG・ローグライク用
        case 'track':     // レーシング・ランニング用
        case 'field':     // オープンワールド・シミュレーション用
        case 'void':      // 抽象・パズルゲーム用
        case 'chamber':   // 脱出・謎解きゲーム用
    }
}
```

## 🎮 **汎用ゲームエンティティシステム**

### **ワイヤーフレーム キャラクター/オブジェクト生成**
```javascript
// どんなゲームにも適用可能なエンティティ構造
function createWireframeEntity(type, complexity = 'standard') {
    const entityTypes = {
        'humanoid': {
            structure: '頭・胴・四肢の関節構造',
            animations: '歩行・攻撃・防御・アイドル',
            details: '内部骨格・エネルギーコア・装備'
        },
        'vehicle': {
            structure: 'シャシー・ホイール・フレーム',
            animations: '移動・回転・サスペンション',
            details: '内部機構・エンジン・ライト'
        },
        'creature': {
            structure: '有機的形状・触手・翼',
            animations: '浮遊・蠢動・変形',
            details: 'エネルギーフィールド・パルス'
        },
        'mechanical': {
            structure: '幾何学的・モジュラー構造',
            animations: '機械的動作・組み換え',
            details: 'ギア・回路・エネルギー導管'
        },
        'abstract': {
            structure: '非定形・数学的形状',
            animations: '形状変化・分裂・融合',
            details: 'パーティクル・波形・フラクタル'
        },
        'architectural': {
            structure: '建築的・構造的要素',
            animations: '展開・収縮・回転',
            details: '支柱・梁・フレームワーク'
        }
    };
}
```

### **汎用アニメーションシステム**
```javascript
// ゲームジャンル問わず使える動作パターン
const animationLibrary = {
    movement: {
        organic: '生物的な滑らかな動き',
        mechanical: '機械的な精密動作',
        supernatural: '重力無視・瞬間移動',
        physics: '慣性・反動のリアル動作'
    },
    interaction: {
        combat: '攻撃・防御・回避動作',
        manipulation: '掴む・押す・引く動作',
        communication: 'ジェスチャー・表現動作',
        environmental: '扉・スイッチ・ツール操作'
    },
    feedback: {
        damage: 'ダメージ・衝撃表現',
        success: '成功・達成エフェクト',
        power: 'パワーアップ・チャージ',
        transformation: '変身・進化・強化'
    }
};
```

## ⚡ **汎用エフェクト & パーティクルシステム**

### **ワイヤーフレーム パーティクルエフェクト**
```javascript
function createUniversalParticles(type, position, parameters) {
    const particleTypes = {
        explosion: '爆発・破壊エフェクト',
        energy: 'エネルギー・魔法エフェクト',
        impact: '衝突・ヒットエフェクト',
        transformation: '変化・変身エフェクト',
        ambient: '環境・雰囲気エフェクト',
        trail: '軌跡・残像エフェクト',
        aura: 'オーラ・力場エフェクト',
        geometric: '幾何学・抽象エフェクト'
    };
    
    // 全てワイヤーフレーム形状で構成
    // グレースケール階層に従った表現
    // ゲームジャンルに関係なく使用可能
}
```

### **プロシージャル ワイヤーライン生成**
```javascript
// 動的に生成される装飾・構造線
function createProceduralWireframes() {
    const patterns = {
        organic: 'CatmullRomCurve3 による有機的曲線',
        geometric: '数学的パターン・フラクタル構造',
        architectural: '建築的・構造的ライン',
        energy: 'エネルギーフロー・データストリーム',
        decorative: '装飾的・芸術的パターン',
        functional: '機能的・UI/UX的ライン'
    };
}
```

## 🎯 **汎用ゲームメカニクス対応**

### **入力システム（全ジャンル対応）**
```javascript
const universalInputs = {
    movement: 'WASD/方向キー - 移動・ナビゲーション',
    action: 'スペース/クリック - メインアクション',
    secondary: 'Shift/右クリック - サブアクション',
    camera: 'マウス - カメラ・視点制御',
    menu: 'ESC/Tab - メニュー・UI制御',
    special: '数字キー - 特殊アクション・ショートカット'
};
```

### **汎用UI/UXシステム**
```javascript
function createWireframeUI() {
    const uiElements = {
        hud: '体力・スコア・ステータス表示',
        menu: 'メインメニュー・設定画面',
        inventory: 'アイテム・装備管理',
        dialogue: '会話・テキスト表示',
        map: 'マップ・ナビゲーション',
        tutorial: 'チュートリアル・ヘルプ'
    };
    
    // 全てワイヤーフレーム美学で統一
    // 高コントラスト・視認性重視
    // ゲームジャンル問わず適用可能
}
```

## 🎨 **墨絵デジタルアート実装指針**

### **視覚的統一性**
```javascript
const artDirection = {
    minimalism: '最小限の要素で最大の表現力',
    contrast: '白と黒の明確な対比',
    depth: 'オパシティによる奥行き表現',
    movement: 'ライン動作による生命感',
    harmony: '要素間の調和とバランス',
    focus: '重要要素への視線誘導'
};
```

### **技術的美学**
```javascript
const technicalAesthetics = {
    performance: '60fps維持・メモリ効率',
    scalability: '要素数に関係ない描画品質',
    consistency: '全要素の視覚的統一性',
    accessibility: '視覚障害者への配慮',
    elegance: 'コードの美しさ・保守性'
};
```

## 🚀 **実装哲学**

### **ゲームジャンル汎用性**
- **アクション**: 高速移動・戦闘・反射神経ゲーム
- **RPG**: キャラクター成長・探索・物語体験
- **パズル**: 論理思考・問題解決・創造性
- **シミュレーション**: リアルシステム・管理・構築
- **レーシング**: 速度感・競争・技術向上
- **シューティング**: 精密操作・戦略・瞬間判断
- **プラットフォーム**: ジャンプ・移動・探索
- **ストラテジー**: 戦略・計画・リソース管理

### **拡張可能な基盤**
```javascript
const coreFramework = {
    rendering: '高品質ワイヤーフレーム描画エンジン',
    physics: '軽量・効率的物理演算',
    audio: 'ワイヤーフレーム美学と調和する音響',
    networking: 'マルチプレイヤー対応基盤',
    modding: 'ユーザー拡張・カスタマイズ対応'
};
```

---

**🖤 汎用ワイヤーアートゲームの本質**：
- **技術的普遍性**: どんなゲームジャンルでも適用可能
- **美学的一貫性**: 墨絵の精神を保持しつつ多様な表現
- **実装効率**: 再利用可能なコンポーネント設計
- **創造的自由度**: 開発者の想像力を制限しない柔軟性
- **時代性**: クラシックでありながらモダンな表現力
