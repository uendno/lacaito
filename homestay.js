/**
 * Created by uendn on 6/16/2017.
 */

var contents = {
    section3: [
        "Giữa những ngày nắng vàng hanh khô từng phiến lá của Hà Nội, góc nhỏ ngõ Dã Tượng vẫn trong trẻo đến lạ. Bình yên và tươi mát, Lacaito - Là Cái Tổ là chốn ưa thích cho những người xê dịch ghé qua.",
        "Ở Tổ, lối vào không rộng nhưng đủ để cảm thấy gần gũi, ấm áp với hương bếp thơm thoảng, bóng tre xanh rợp giữa thanh âm mùa hè và cầu thang uốn vòng dẫn lên trên.",
        "Nhắc đến Tổ, người dân ở Dã Tượng thường ví như một nơi vừa có sự nâng niu, âu yếm, vừa có cái gần gũi và rất “nhà”.",
        "Nằm trong quần thể khu nhà cổ được xây từ thời Pháp thuộc, nhưng Tổ vừa mang nét kiến trúc châu  u, vừa thấp thoáng hơi thở Việt với sự cách tân qua thời gian.",
        "Nếu vô tình là người không biết đến bếp núc, đừng lo, vì quanh Tổ luôn sẵn sàng bún ngan, trà đá, bún cá… đầy đủ những gánh hàng ăn với món ngon đặc biệt nhất của Hà Nội."
    ],
    section4: [
        "Đêm ở Tổ sẽ thật tuyệt với giai điệu huyền thoại của The Beatles, hương tinh dầu xả dìu dìu và những câu chuyện bất tận trải dài bên ghế sofa.",
        "Cùng nhau đi hết một vòng là cái tổ, rốt cuộc trái tim căn nhà lại nằm ở nơi có tạp dề và bát đũa xinh xinh. Sau bao nhiêu mệt mỏi của cuộc sống, tạm gác mọi thứ qua một bên và thưởng thức tình yêu sau căn bếp thôi....",
        "Những ngày Hà Nội đang thu, chẳng đâu hút mình hơn ngoài việc rúc mình trong tổ, ngồi vu vơ bên khung cửa nhỏ, thêm chút bánh trà, sống những ngày thật thơ.",
        "Là con gái, soi gương không những phải thấy mình thật xinh mà đến gương cũng phải cực kì đẹp, cuộc sống xung quang chẳng có gì để chê thì mới đủ bộ nè. Với Tổ, cảm giác dễ chịu luôn là điều có thể tìm thấy ở khắp mọi nơi trong không gian nhỏ xinh này.",
        "An yên ở Tổ là được cùng nhau thức giấc, tự tay chuẩn bị bữa sáng tuyệt vời khởi đầu ngày mới tràn năng lượng. "
    ]
};

$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        scrollHorizontally: true,
        autoScrolling: true,
        controlArrows: false,
        continuousHorizontal: true,
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {

            switch (index) {
                case 3: {
                    $(".section-3 .content").text(contents.section3[nextSlideIndex])
                }

                case 4: {
                    $(".section-4 .content").text(contents.section4[nextSlideIndex])
                }
            }
        }
    });

    resizeImages();
    setAutoScrollingForSlides(5000);

});

// Resize all image to fit screen
var resizeImages = function () {

    // $('.bg').each(function () {
    //     var theWindow = $(window),
    //         $bg = $(this),
    //         aspectRatio = $bg.width() / $bg.height();
    //
    //     function resizeBg() {
    //
    //         var parentRatio = theWindow.width() / theWindow.height();
    //
    //         if ($bg.parents('.image-crop').length > 0) {
    //             parentRatio = (theWindow.width() / 2) / (theWindow.height() - 250);
    //         }
    //
    //         console.log(parentRatio);
    //
    //         if (parentRatio <= aspectRatio) {
    //             console.log(parentRatio + " " + aspectRatio);
    //             $bg
    //                 .removeClass()
    //                 .addClass('bgheight');
    //         } else {
    //             $bg
    //                 .removeClass()
    //                 .addClass('bgwidth');
    //         }
    //
    //     }
    //
    //     theWindow.resize(resizeBg).trigger("resize");
    // });
};

var setAutoScrollingForSlides = function (interval) {
    setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, interval)
};

