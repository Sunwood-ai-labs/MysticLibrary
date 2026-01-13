# Three.jsワイヤーアートゲーム 技術スタックプロンプト

## 🎨 **メイン技術スタック**

### **Three.js (3Dエンジン)**
- WebGLベースの3Dライブラリ
- ブラウザで高性能な3D描画を実現
- リアルタイムレンダリングとアニメーション

### **ワイヤーフレーム描画技術**
```javascript
// エッジジオメトリを使用
const edges = new THREE.EdgesGeometry(geometry);
const wireframe = new THREE.LineSegments(edges, material);

// ワイヤーフレームマテリアル
const material = new THREE.LineBasicMaterial({ 
    color: 0x000000, 
    opacity: 0.8, 
    transparent: true 
});
```

## 🏗️ **アーキテクチャ構造**

### **1. 幾何学的形状生成**
- **プリミティブ形状**: Box, Sphere, Cylinder, Cone
- **複雑な形状**: ExtrudeGeometry, TubeGeometry
- **カスタム形状**: CatmullRomCurve3でカーブ生成

### **2. プロシージャル生成**
```javascript
// 放射状パターン生成
const radialPattern = (count, radius, height, func) => {
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        func(x, height, z, angle, i);
    }
};
```

### **3. 多層レンダリング**
- **メッシュレイヤー**: 基本形状の輪郭
- **ラインレイヤー**: 装飾的なライン
- **エフェクトレイヤー**: パーティクルと動的エフェクト

## ⚡ **リアルタイム処理**

### **物理シミュレーション**
- 衝突検出
- パーティクル物理
- 慣性とスムージング

### **アニメーションシステム**
```javascript
// 補間アニメーション
camera.position.x = THREE.MathUtils.lerp(current, target, 0.1);

// 三角関数ベースの周期アニメーション
enemy.position.y = Math.sin(time * 1.8) * 0.15;
```

## 🎭 **アーティスティック技法**

### **1. ミニマリズム**
- 黒線のみで表現
- 白/グレー背景
- 余白を活かした構成

### **2. 幾何学美学**
- 数学的な美しさ
- 対称性とパターン
- フラクタル的な構造

### **3. 動的構成**
```javascript
// 星座のプロシージャル配置
const createConstellation = (pattern, position, scale, rotation) => {
    // 複雑な星座パターンを数学的に生成
    pattern.stars.forEach(([x, y]) => {
        // 星を配置
    });
    pattern.lines.forEach(([start, end]) => {
        // 線を描画
    });
};
```

## 🌌 **環境デザイン**

### **多層グリッドシステム**
- 同心円グリッド
- 放射状グリッド
- 階層的なオパシティ

### **プロシージャル装飾**
- 自動生成される文様
- アルゴリズミック配置
- パラメトリックデザイン

## 🎮 **インタラクション技術**

### **状態管理**
- ゲーム状態の追跡
- アニメーション状態機械
- 物理状態の管理

### **リアルタイム応答**
- キーボード入力処理
- 即座のビジュアルフィードバック
- スムーズなトランジション

## 🔮 **特殊エフェクト**

### **パーティクルシステム**
```javascript
function createParticleEffect(position, type) {
    // 動的パーティクル生成
    // 物理ベースの動き
    // ライフタイム管理
}
```

### **ライトニングエフェクト**
- 動的ライン描画
- テンポラリオブジェクト
- フェードアウトアニメーション

---

**この技術の魅力は**：
- ✨ **プログラマティックアート** - コードで美を表現
- 🎯 **パフォーマンス最適化** - 60FPSでスムーズ動作  
- 🎨 **アートとテクノロジーの融合** - 数学的美学
- 🌟 **リアルタイム生成** - 動的で生き生きとした表現
