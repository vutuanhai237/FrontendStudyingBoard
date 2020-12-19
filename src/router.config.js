//#region import
import {
  Account,
  Document,
  Activity,
  Notification,
  Role,
  Category,
  Post,
  User,
  ContentManagement,
  Statistic
} from "utils/permissionUtils";
import Home from 'pages/common/Home/Home'
import NormalBlankLayout from 'layouts/NormalBlankLayout'
import AdminLayout from 'layouts/AdminLayout'
//#endregion

const routers = {

  //header
  logoRouter: { path: "/", exact: true, title: "Trang chủ", label: "", permission: [], component: Home },
  headerMenuRouter: [{ path: "/posts?page=1&category=1", exact: true, title: "Bài viết", label: "BÀI VIẾT", permission: [], component: NormalBlankLayout },
  { path: "/documents?page=1&category=1", exact: true, title: "Tài liệu", label: "TÀI LIỆU", permission: [], component: NormalBlankLayout },
  { path: "/courses?page=1&category=1", exact: true, title: "Khoá học", label: "KHOÁ HỌC", permission: [], component: NormalBlankLayout },
  { path: "/questions?page=1&category=1", exact: true, title: "Hỏi đáp", label: "HỎI ĐÁP", permission: [], component: NormalBlankLayout },
  { path: "/admin", exact: true, title: "Quản lý", label: "QUẢN LÝ", permission: [ContentManagement.Admin], component: AdminLayout },
  { path: "/collab", exact: true, title: "Cộng tác viên", label: "CỘNG TÁC", permission: [ContentManagement.Collaborator], component: AdminLayout },
  ],

  //search
  quickSearchRouter: [
    { path: "/search-doc?page=1&category=1", exact: true, title: "Tìm kiếm tài liệu", label: "Tài liệu", permission: [] },
    { path: "/search-post?page=1&category=1", exact: true, title: "Tìm kiếm bài viết", label: "Bài viết", permission: [] },
    //{ path: "/search-course", exact: true, title: "Tìm kiếm khoá học", label: "Khoá học", permission: [] },
    { path: "/search-tag", exact: true, title: "Tìm kiếm tag", label: "Tag", permission: [] },
  ],

  //tag search
  tagSearchRouter: [
    { path: "/search-tag/:id/posts", exact: true, title: "Tìm kiếm bài viết", label: "Bài viết", permission: [] },
    { path: "/search-tag/:id/documents", exact: true, title: "Tìm kiếm tài liệu", label: "Tài liệu", permission: [] },
    { path: "/search-tag/:id/courses", exact: true, title: "Tìm kiếm khoá học", label: "Khoá học", permission: [] },
  ],
  userRouter: [
    { path: "/user", exact: true, title: "Quản lý người dùng", label: "", permission: [] },
    { path: "/user/update-password", exact: true, title: "Cập nhật mật khẩu", label: "", permission: [] },
    { path: "/user/my-documents", exact: true, title: "Tài liệu của tôi", label: "", permission: [] },
    { path: "/user/my-posts", exact: true, title: "Bài viết của tôi", label: "", permission: [] },
    { path: "/user/notification", exact: true, title: "Thông báo", label: "", permission: [] },
    { path: "/create-post", exact: true, title: "Tạo bài viết", label: "", permision: [] },
    { path: "/upload-doc", exact: true, title: "Upload Tài liệu", label: "", permision: [] }
  ],

}

export const routerList =
  [
    routers.logoRouter,
    ...routers.headerMenuRouter,
    ...routers.quickSearchRouter,
    ...routers.tagSearchRouter,
    ...routers.userRouter
  ]

export const { logoRouter, headerMenuRouter, searchRouter, tagSearchRouter, userRouter } = routers;