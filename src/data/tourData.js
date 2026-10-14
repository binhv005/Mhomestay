// Ảnh thực tế của Mhome Homestay nằm trong public/New folder
const photo = (file) => encodeURI(`/New folder/ảnh sản phẩm/${file}`);

export const images = {
  logo: encodeURI('/New folder/LOGO/354244121_277730791424761_3478559739772211479_n.jpg'),
  facade: photo('480645575_512297838579887_5960210011032752068_n.jpg'),
  blueHouse: photo('480670391_512297741913230_2424364070133239363_n.jpg'),
  loftRoom: photo('480691874_512297811913223_4328601926191105174_n.jpg'),
  sunflower: photo('480792988_512297828579888_4386545350932827429_n.jpg'),
  archRoom: photo('480793276_512297675246570_1094696499457030648_n.jpg'),
  flowerHill: photo('480853119_512297835246554_6033075571965092679_n.jpg'),
  door: photo('480907577_512297815246556_7325717708688699621_n.jpg'),
};

const raw = {
  name: 'Mhome Homestay Đà Lạt',
  tagline: 'Cho thuê phòng · Lưu trú Đà Lạt',
  concept: 'Chạm vào bình yên, tận hưởng những ngày ở Đà Lạt.',
  location: '23/12 Quang Trung, Thành phố Đà Lạt, Lâm Đồng 66000, Việt Nam',
  hotline: '0328684315',
  hotlineFormatted: '0328 684 315',
  telLink: 'tel:0328684315',
  facebookLink: 'https://www.facebook.com/mhomedalat',
  googleMapsLink: 'https://maps.app.goo.gl/jzVHVfmwmbpid3X57',
  googleMapsEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('23/12 Quang Trung, Đà Lạt, Lâm Đồng') +
    '&output=embed',

  hero: {
    title: 'Mhome',
    titleSub: 'Homestay Đà Lạt',
    subtitle: 'Chạm vào bình yên, tận hưởng những ngày ở Đà Lạt.',
    ctaPrimary: 'Đặt phòng ngay',
    ctaSecondary: 'Khám phá không gian',
  },

  about: {
    heading: 'Một góc nghỉ ngơi giữa lòng Đà Lạt',
    paragraphs: [
      'Mhome Homestay Đà Lạt là điểm dừng chân cho những ai tìm không gian lưu trú trong hành trình khám phá thành phố Đà Lạt.',
      'Mhome hướng đến trải nghiệm nghỉ ngơi thoải mái, gần gũi bên gia đình, bạn bè hoặc người thương.',
    ],
    quote: 'Một chút Đà Lạt, một chút bình yên.',
    images: [
      { src: images.door, alt: 'Cửa gỗ vòm và giàn hoa tại Mhome Homestay Đà Lạt' },
      { src: images.facade, alt: 'Mặt tiền Mhome Homestay Đà Lạt với giàn hoa giấy' },
      { src: images.blueHouse, alt: 'Căn nhà gỗ xanh và ban công tại Mhome Homestay Đà Lạt' },
    ],
  },

  spaces: {
    heading: 'Khám phá không gian Mhome',
    description:
      'Hình ảnh thực tế của Mhome để bạn hình dung không gian lưu trú trước khi chọn.',
    items: [
      {
        src: images.loftRoom,
        alt: 'Phòng nghỉ có gác lửng bằng gỗ tại Mhome Homestay Đà Lạt',
        title: 'Phòng nghỉ gác lửng gỗ',
        desc: 'Trần gỗ ấm áp, nhiều ánh nắng.',
      },
      {
        src: images.archRoom,
        alt: 'Phòng nghỉ với cổng vòm và lan can sắt uốn tại Mhome Homestay Đà Lạt',
        title: 'Góc nghỉ ngơi thực tế',
        desc: 'Cổng vòm và lan can sắt uốn.',
      },
    ],
    cta: 'Liên hệ hỏi thông tin phòng',
  },

  services: {
    heading: 'Dịch vụ lưu trú dành cho hành trình của bạn',
    items: [
      {
        title: 'Cho thuê phòng homestay',
        desc: 'Không gian phòng phù hợp nhu cầu nghỉ ngơi.',
      },
      {
        title: 'Lưu trú ngắn ngày',
        desc: 'Phương án lưu trú cho chuyến đi ngắn.',
      },
      {
        title: 'Lưu trú du lịch',
        desc: 'Trao đổi thời gian lưu trú phù hợp lịch trình.',
      },
      {
        title: 'Hỗ trợ thông tin đặt phòng',
        desc: 'Hỏi trực tiếp về tình trạng phòng và giá phòng.',
      },
    ],
    reasonsHeading: 'Bắt đầu hành trình Đà Lạt theo cách của bạn',
    reasons: [
      { title: 'Địa điểm tại Đà Lạt', desc: 'Thuận tiện lên kế hoạch chuyến đi.' },
      { title: 'Thông tin trực tiếp', desc: 'Dễ hỏi về phòng, giá, giờ nhận phòng.' },
      { title: 'Phù hợp nhiều hành trình', desc: 'Đón khách trong nước và quốc tế.' },
      { title: 'Không gian thực tế', desc: 'Xem ảnh homestay trước khi đặt.' },
    ],
  },

  gallery: {
    heading: 'Một chút Đà Lạt, một chút bình yên',
    images: [
      { src: images.facade, title: 'Mặt tiền Mhome Homestay', category: 'Không gian' },
      { src: images.loftRoom, title: 'Phòng nghỉ gác lửng gỗ', category: 'Phòng nghỉ' },
      { src: images.blueHouse, title: 'Căn nhà gỗ xanh và ban công', category: 'Không gian' },
      { src: images.archRoom, title: 'Góc nghỉ ngơi với cổng vòm', category: 'Phòng nghỉ' },
      { src: images.door, title: 'Cửa gỗ vòm bên giàn hoa', category: 'Không gian' },
      { src: images.sunflower, title: 'Hoa dã quỳ Đà Lạt', category: 'Đà Lạt' },
      { src: images.flowerHill, title: 'Đồi hoa dã quỳ', category: 'Đà Lạt' },
    ],
  },

  contact: {
    heading: 'Liên hệ Mhome Homestay Đà Lạt',
    callLabel: 'Gọi điện',
    facebookLabel: 'Facebook',
    mapLabel: 'Chỉ đường',
  },

  faqs: {
    heading: 'Câu hỏi thường gặp',
    subtitle: 'Thông tin nhanh về Mhome.',
    items: [
      {
        q: 'Mhome Homestay ở đâu?',
        a: '23/12 Quang Trung, Thành phố Đà Lạt, Lâm Đồng. Bấm Chỉ đường để mở Google Maps.',
      },
      {
        q: 'Tôi có thể hỏi giá phòng và tình trạng phòng ở đâu?',
        a: 'Gọi 0328684315 hoặc nhắn tin qua Facebook Mhome Homestay Đà Lạt.',
      },
      {
        q: 'Mhome có đón khách quốc tế không?',
        a: 'Có. Mhome chào đón du khách trong nước và quốc tế.',
      },
      {
        q: 'Tôi có thể xem hình ảnh thực tế trước khi đặt phòng không?',
        a: 'Có. Xem ở mục Không gian và Thư viện hình ảnh.',
      },
    ],
  },

  finalCta: {
    heading: 'Sẵn sàng cho chuyến đi Đà Lạt của bạn?',
    ctaPrimary: 'Liên hệ đặt phòng',
    ctaSecondary: 'Gọi Mhome ngay',
  },
};

// Nối 2 từ cuối mỗi đoạn bằng khoảng trắng không ngắt để dòng cuối luôn có ít nhất 2 chữ
const glue = (v, key) => {
  if (typeof v === 'string') {
    if (/^(\/|https?:|tel:)/.test(v) || ['src', 'alt'].includes(key)) return v;
    return v.replace(/ (\S+)$/, ' $1');
  }
  if (Array.isArray(v)) return v.map((x) => glue(x, key));
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, glue(x, k)]));
  return v;
};

export const tourData = glue(raw);
