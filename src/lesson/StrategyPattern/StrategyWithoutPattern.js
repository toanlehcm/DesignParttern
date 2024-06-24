export default function StrategyWithoutPattern(params) {

  function getPrice(originalPrice = 160, typePromotion = 'default') {

    // Giam gia khi nguoi dung dat truöc möt san phâm cüa VINFAST
    if (typePromotion === "preOrder") {
      return originalPrice * 0.8; // giam 20%
    } // 0 giai doan nay nêu nhu ban da biêt vè sOLID thi nó da phá vo nguyên tác dau tiên. Dó là Nguyên tac 'trach nhiem duy nhat'.

    // Tiep tuc them tinh nang khuyên mai thong thuong, vi du Neu gia goc < 200 thi giam 10%, con > thi giam toi da 30
    if (typePromotion === "promotion") {
      return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
    }

    // Den ngay blackFriday promotion.
    if (typePromotion === 'blackFriday') {
      return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
    }

    // Thoi xua chua có marketing nhu bây gio.
    if (typePromotion === 'default') {
      return originalPrice;
    }

    console.log('-> PRICE:::', getPrice(200, 'preorder'))
  }

  return (
    <>
      <div>StrategyWithoutPattern </div>
      <div>{getPrice()} </div>
    </>
  )
}

