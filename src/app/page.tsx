"use client"
import Image from "next/image";
import Feature from "@/components/page/Feature";
import Interest from "@/components/page/Interest";
import Info from "@/components/page/Info"
import Count from "@/components/page/demo"

import { useState, useContext } from "react";
import { UserContext } from "@/context/userContext";



export default function Home() {

  const initialValue = { success: true }
  const [state, setState] = useState(initialValue)


  const features = [
    {
      title: "Mục tiêu nghề nghiệp",
      description: "Trở thành người đổi mới trong lĩnh vực truyền thông kỹ thuật số và quản lý truyền thông qua mạng xã hội có trách nhiệm, đồng thời sử dụng các nền tảng trực tuyến để tổ chức các cộng đồng hướng tới một mục tiêu chung",
    },
    {
      title: "Điểm Mạnh Cốt Lõi",
      description: `
      – Sáng tạo nội dung<br>
      – Mở rộng mạng lưới quan hệ xã h<br>
      – Quan hệ công chúng<br>
      – Quản lý trang web<br>
      – Công cụ phân tích kỹ thuật số<br>
      – Thiết kế đồ họa<br>
      – Kỹ năng giao tiếp tốt<br>`,
    },
    {
      title: "Thông tin liên hệ",
      description: `Điện thoại: 0912 345 678<br>
                    Email: xinchao@trangwebhay.vn<br>
                    LinkedIn: @trangwebhay<br>
                    123 Nguyễn Hữu Cảnh, Bình Thạnh,<br>
                    www.trangwebhay.vn`,
    },
  ];
  const workingProcesses = {
    title: "Quá trình làm việc",
    items: [
      {
        title: "Công nghiệp Beatbox",
        position: "Quản lý Cộng đồng Cấp cao, 2017-2019",
        des: "Mở rộng cộng đồng Beatbox bằng cách thu hút thêm người tham gia qua các kênh mạng xã hội. Cải thiện cấu trúc chương trình cộng đồng cho khu vực Phía Đông."
      },
      {
        title: "Thời báo Bình Lợi",
        position: "Quản lý Cộng đồng Cấp thấp, 2015-2017",
        des: "Tương tác với người đăng ký trên các trang mạng xã hội. Sáng tạo nội dung cho nhiều nền tảng trực tuyến và mạng xã hội khác nhau. Theo dõi các chỉ số về hiệu suất."
      },
    ]
  }
  const learningProcesses = {
    title: "Quá trình học tập",
    items: [
      {
        title: "Trường Đại học Kinh doanh và Công nghệ",
        position: "Cử nhân Quản trị Kinh doanh",
        des: `
        – Tốt nghiệp loại xuất sắc<br>
        – Tổng biên tập của Thời báo Thanh niên, 2014-2015<br>
        – Thành viên của Hội tài năng trẻ<br>
        – Người sáng lập Hội Nhà văn Thanh niên`
      },
      {
        title: "Đào tạo Công nghệ Kinh Công",
        position: "Chứng chỉ hoàn thành khóa học Tổ chức Cộng đồng",
        des: `
        – Hoàn thành các môn học trước thời hạn<br>
        – Được trao Giải thưởng Thành tích Học tập<br>
        – Luận văn Xuất sắc nhất: "Cầu nối Khoảng cách giữa Tương tác. Cộng đồng Trực tuyến và Ngoại tuyến"`
      },
    ]
  }
  const interest = {
    title: "Sở thích & Mối quan tâm",
    des: `
    – Trượt ván<br>
    – Chơi guitar điện và trống<br>
    – Đạp xe đường núi<br>
    – Chạy cự ly<br>
    – Viết thơ và truyện viễn tưởng<br>
    – Vẽ phong cảnh đô thị
    `
  }
  return (
      <div className="grid grid-cols-12 gap-4 bg-gray-100 text-gray-600 font-oswald">
        <div className="col-span-4 bg-gray-600 text-white p-8 ">
          <Info />
          haha
          <div className="pb-10 flex flex-col gap-12">
            {features.map((feature, index) => {
              return <Feature key={index} feature={feature} />
            })}
          </div>
        </div>

        <div className="col-span-8 p-8 flex flex-col gap-20 pt-18">
          <div>
            <p className="text-3xl font-bold pb-4">{workingProcesses.title}</p>
            <div className="flex flex-col gap-4">
              {(workingProcesses.items || []).map((item, workIndex) => {
                return <div key={workIndex}>
                  <p className="text-xl uppcase font-bold">{item.title}</p>
                  <p className="text-base font-bold pb-2">{item.position}</p>
                  <p className="italic" dangerouslySetInnerHTML={{ __html: item.des }}></p>
                </div>
              })}
            </div>

          </div>
          <div>
            <p className="text-3xl font-bold pb-4">{learningProcesses.title}</p>
            <div className="flex flex-col gap-4">
              {(learningProcesses.items || []).map((item, workIndex) => {
                return <div key={workIndex}>
                  <p className="text-xl uppcase font-bold">{item.title}</p>
                  <p className="text-base font-bold pb-2">{item.position}</p>
                  <p className="italic" dangerouslySetInnerHTML={{ __html: item.des }}></p>
                </div>
              })}
            </div>

          </div>
          <Interest interest={interest} />

        </div>
        <Count />
      </div>
  );
}
