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
        "Cùng nhau đi hết một vòng là cái tổ, rốt cuộc trái tim căn nhà lại nằm ở nơi có tạp dề và bát đũa xinh xinh. Sau bao nhiêu mệt mỏi của cuộc sống, tạm gác mọi thứ qua một bên và thưởng thức tình yêu sau căn bếp thôi....",
        "Đêm ở Tổ sẽ thật tuyệt với giai điệu huyền thoại của The Beatles, hương tinh dầu xả dìu dìu và những câu chuyện bất tận trải dài bên ghế sofa.",
        "Những ngày Hà Nội đang thu, chẳng đâu hút mình hơn ngoài việc rúc mình trong tổ, ngồi vu vơ bên khung cửa nhỏ, thêm chút bánh trà, sống những ngày thật thơ.",
        "Là con gái, soi gương không những phải thấy mình thật xinh mà đến gương cũng phải cực kì đẹp, cuộc sống xung quang chẳng có gì để chê thì mới đủ bộ nè. Với Tổ, cảm giác dễ chịu luôn là điều có thể tìm thấy ở khắp mọi nơi trong không gian nhỏ xinh này.",
        "An yên ở Tổ là được cùng nhau thức giấc, tự tay chuẩn bị bữa sáng tuyệt vời khởi đầu ngày mới tràn năng lượng. "
    ]
};

var galleryImageSrcs = [
    "images/7 Gallery/BST (1).JPG",
    "images/7 Gallery/BST (2).JPG",
    "images/7 Gallery/BST (3).JPG",
    "images/7 Gallery/BST (4).JPG",
    "images/7 Gallery/BST (5).JPG",
    "images/7 Gallery/BST (6).JPG",
    "images/7 Gallery/BST (7).JPG",
    "images/7 Gallery/BST (8).JPG",
    "images/7 Gallery/BST (9).JPG",
    "images/7 Gallery/BST (10).JPG",
    "images/7 Gallery/BST (11).JPG"
];

var slider;
var currentFeedbackIndex = 0;
var galleryInterval;

var feedbacks = [
    {
        author: "Tâm Phạm",
        role: "Khách hàng",
        avatar: "images/6 Cam nhan ve homestay/avatar/Tâm.jpg",
        feedback: "Ấm - cả nghĩa đen và nghĩa bóng là những gì mình nghĩ về Tổ. Mình vẫn nhớ như in ngày lạnh ấy, Tổ đón mình với ánh đèn vàng ấm và hương tinh dầu dịu dàng đến mềm lòng, ấm áp như vừa nhận một cái ôm."
    },
    {
        author: "Phương Anh",
        role: "Khách hàng",
        avatar: "images/6 Cam nhan ve homestay/avatar/Phanh bé.jpg",
        feedback: "Lacaito, mình muốn cảm ơn nhiều, vì tụi mình đã có khoảng thời gian rất tuyệt, bên nhau và cùng làm những điều thật bình thường, nhưng theo một cách riêng. Không gian đẹp và yên tĩnh, 2 ly trà thơm ấm sực và một bộ phim hay, hẹn hò cổ điển nhưng tại sao không?"
    },
    {
        author: "Trang Chang",
        role: "Khách hàng",
        avatar: "images/6 Cam nhan ve homestay/avatar/Trang chang.jpg",
        feedback: "Không gian thì rõ xinh rồi, nhưng đó không phải tất cả, tớ còn rất ấn tượng với chị chủ nhà nữa. Nói chuyện xíu thôi mà quý chị luôn vì nhẹ nhàng cực kì và đúng kiểu mẫu người sống duy mĩ í."
    },
    {
        author: "Thùy Trang",
        role: "Khách hàng",
        avatar: "images/6 Cam nhan ve homestay/avatar/Thái.jpg",
        feedback: "Lần đầu đến đây đã mê luôn đó, đúng hình mẫu căn phòng tớ luôn thích. Có sofa da nâu mềm nè, có ánh đèn vàng dịu dịu và cả nến. Nơi trú ẩn hoàn hảo!"
    },
    {
        author: "Hương Ly",
        role: "Khách hàng",
        avatar: "images/6 Cam nhan ve homestay/avatar/Ly.jpg",
        feedback: "Mình và mấy nhỏ bạn thân có thói quen hứng lên là rủ nhau \"đi trốn\" và một lần điểm đến của bọn mình chính là nơi này. Ban đầu mình đã hơi bất ngờ vì nó bé hơn mình nghĩ, nhưng mà vẫn xinh ơi là xinh, và đặc biệt là mình thấy gần gũi cực kì, đúng nghĩa như \"về tổ\" ấy."
    }
];


$(document).ready(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        scrollHorizontally: true,
        autoScrolling: true,
        controlArrows: false,
        continuousHorizontal: true,
        // paddingTop: '50px',
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {

            switch (index) {
                case 3: {
                    var text = $(".section-3 .content p");
                    text.animate({
                        opacity: 0
                    }, 400, function () {
                        text.text(contents.section3[nextSlideIndex])
                        text.animate({
                            opacity: 1
                        }, 400)
                    });
                    break;
                }

                case 4: {
                    var text = $(".section-4 .content p");
                    text.animate({
                        opacity: 0
                    }, 400, function () {
                        text.text(contents.section4[nextSlideIndex])
                        text.animate({
                            opacity: 1
                        }, 400)
                    });
                    break;
                }

                case 6: {
                    slider.goToSlide(nextSlideIndex + 1);
                    break;
                }
            }
        },
        onLeave: function (index, nextIndex, direction) {
            switch (index) {
                case 6: {
                    if (galleryInterval) {
                        clearInterval(galleryInterval);
                    }
                    break;
                }

                case 1: {
                    $('#title-bar').animate({
                        left: '-600px'
                    }, 1000)
                    break;
                }
            }

            switch (nextIndex) {
                case 6: {
                    galleryInterval = setInterval(function () {
                        nextGalleryImage()
                    }, 3000)
                    break;
                }

                case 1: {
                    $('#title-bar').animate({
                        left: '0'
                    }, 1000)
                    break;
                }
            }

            if (nextIndex === 7) {
                $("#action-buttons").hide()
            } else {
                $("#action-buttons").show()
            }
        }
    });

    setInterval(function () {
        nextFeedback();
    }, 3000)

    loadGallery();

    $('#title-bar').animate({
        left: '0px'
    }, 1000)

    animateLamps();

});

var loadGallery = function () {

    slider = $("#lightSlider").lightSlider({
        loop: true,
        item: 5,
        slideMargin: 50,
        pager: false,
        currentPagerPosition: 'middle'
    });


};

function nextGalleryImage() {
    $.fn.fullpage.moveSlideRight();
}

function prevGalleryImage() {
    $.fn.fullpage.moveSlideLeft();
}

function nextFeedback() {
    currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbacks.length;
    $('#author').text(feedbacks[currentFeedbackIndex].author);
    $('#author-avatar').attr('src', feedbacks[currentFeedbackIndex].avatar);
    $('#role').text(feedbacks[currentFeedbackIndex].role);
    $('#feedback').text(feedbacks[currentFeedbackIndex].feedback);
}

function prevFeedback() {
    currentFeedbackIndex = (currentFeedbackIndex - 1) % feedbacks.length;
    $('#author').text(feedbacks[currentFeedbackIndex].author);
    $('#role').text(feedbacks[currentFeedbackIndex].role);
    $('#feedback').text(feedbacks[currentFeedbackIndex].feedback);
}

function animateLamps() {
    var lamps = $('#lamps');

    var animate = function () {
        lamps.animate({
            top: '-20px'
        }, 700, function () {
            lamps.animate({
                top: 0
            }, 700, animate)
        })
    };

    animate();
}