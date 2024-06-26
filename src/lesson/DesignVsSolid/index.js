// class AssetGold {
//   //  cho phep user mua bang gold
//   buyItem(asset) {
//     console.log(`${asset} buy Gold`);
//   }
// }

// class AssetCash {
//   //  cho phep user mua bang cash
//   buyItem(asset) {
//     console.log(`${asset} buy cash`);
//   }
// }

class Asset {
  //  cho phep user mua bang gold
  buyItem(asset) {
    if (asset === 'macBook') {
      console.log(`${asset} buy cash`);
    } else {
      console.log(`${asset} buy Gold`);
    }
  }
}

class AssetV2 {
  //  cho phep user mua bang gold
  buyItemGold(asset) {
    console.log(`${asset} buy Gold`);
  }

  //  cho phep user mua bang cash.
  buyItemCash(asset) {
    if (asset === 'macBook') {
      console.log(`${asset} buy VND`);
    } else {
      console.log(`${asset} buy USD`);
    }
  }
}

class Client {
  static buy() {
    const asset = new AssetV2()
    asset.buyItemGold('house')
    asset.buyItemGold('car')
    asset.buyItemCash('stock')
    asset.buyItemCash('macBook')
  }
}

export default function DesignVsSolid() {
  Client.buy()

  return (<><div>Design Vs Solid</div></>)
}