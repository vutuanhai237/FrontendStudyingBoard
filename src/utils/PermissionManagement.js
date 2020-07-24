const PermissionList = {
    DocumentPermission: {
        Upload: { Upload: "DOCUMENT_UPLOAD" },
        Edit: { Edit: "DOCUMENT_EDIT" },
        Delete: { Delete: "DOCUMENT_DELETE" },
        Approve: { Approve: "DOCUMENT_APPROVE" },
        Download: { Download: "DOCUMENT_DOWNLOAD" },
        Preview: { Preview: "DOCUMENT_PREVIEW" },

        All: {
            Upload: "DOCUMENT_UPLOAD",
            Edit: "DOCUMENT_EDIT",
            Delete: "DOCUMENT_DELETE",
            Approve: "DOCUMENT_APPROVE",
            Download: "DOCUMENT_DOWNLOAD",
            Preview: "DOCUMENT_PREVIEW"
        }
    },
    PostPermission:
    {
        Upload: { Upload: "POST_UPLOAD" },
        Edit: { Edit: "POST_EDIT" },
        Delete: { Delete: "POST_DELETE" },
        Approve: { Approve: "POST_APPROVE" },
        Comment: { Comment: "POST_COMMENT" },
        Like: { Like: "POST_LIKE" },
        Save: { Save: "POST_SAVE" },

        All: {
            Upload: "POST_UPLOAD",
            Edit: "POST_EDIT",
            Delete: "POST_DELETE",
            Approve: "POST_APPROVE",
            Comment: "POST_COMMENT",
            Like: "POST_LIKE",
            Save: "POST_SAVE"
        }
    },
    CategoryPermission:
    {
        Add: { Add: "CATEGORY_ADD" },
        Edit: { Edit: "CATEGORY_EDIT" },
        Delete: { Delete: "CATEGORY_DELETE" },
        All: {
            Add: "CATEGORY_ADD",
            Edit: "CATEGORY_EDIT",
            Delete: "CATEGORY_DELETE"
        }
    },

    RolePermission:
    {
        Add: { Add: "ROLE_ADD" },
        Edit: { Edit: "ROLE_EDIT" },
        Delete: { Delete: "ROLE_DELETE" },
        All: {
            Add: "ROLE_ADD",
            Edit: "ROLE_EDIT",
            Delete: "ROLE_DELETE",
        }
    },
    ActivityPermission:
    {
        View: { View: "ACTIVITY_VIEW" },
        Add: { Add: "ACTIVITY_ADD" },
        Edit: { Edit: "ACTIVITY_EDIT" },
        Delete: { Delete: "ACTIVITY_DELETE" },
        All: {
            View: "ACTIVITY_VIEW",
            Add: "ACTIVITY_ADD",
            Edit: "ACTIVITY_EDIT",
            Delete: "ACTIVITY_DELETE"
        }
    },
    UserPermission: //interact to list of all user in the system, or another user
    {
        View: { View: "USER_VIEW" },
        Edit: { Edit: "USER_EDIT" },
        Delete: { Delete: "USER_DELETE" },
        ChangePass: { ChangePass: "USER_CHANGE_PASS" },
        DeletePost: { DeletePost: "USER_DELETE_POST" },
        DeleteDoc: { DeleteDoc: "USER_DELETE_DOC" },
        EditDoc: { EditDoc: "USER_EDIT_DOC" },
        EditPost: { EditPost: "USER_EDIT_POST" },
        ChangeRole: { ChangeRole: "USER_CHANGE_ROLE" },

        All: {
            View: "USER_VIEW",
            Edit: "USER_EDIT",
            Delete: "USER_DELETE",
            ChangePass: "USER_CHANGE_PASS",
            DeletePost: "USER_DELETE_POST",
            DeleteDoc: "USER_DELETE_DOC",
            EditDoc: "USER_EDIT_DOC",
            EditPost: "USER_EDIT_POST",
            ChangeRole: "USER_CHANGE_ROLE"
        }
    },
    AccountPermission: //interact to own account
    {
        Edit: { Edit: "ACCOUNT_EDIT" },
        ChangePass: { ChangePass: "ACCOUNT_CHANGE_PASS" },
        DeletePost: { DeletePost: "ACCOUNT_DELETE_POST" },
        DeleteDoc: { DeleteDoc: "ACCOUNT_DELETE_DOC" },

        All: {
            Edit: "ACCOUNT_EDIT",
            ChangePass: "ACCOUNT_CHANGE_PASS",
            DeletePost: "ACCOUNT_DELETE_POST",
            DeleteDoc: "ACCOUNT_DELETE_DOC",
        }
    }
}

export function getRoleNameByName(roleName) {
    if (roleName === "ROLE_ADMIN")
        return "Admin";
    if (roleName === "ROLE_USER")
        return "User";
    if (roleName === "ROLE_COLLABORATOR")
        return "Collaborator";
    return "Guest";
}

export function getRoleNamebyID(roleId) {
    if (roleId === 1)
        return "Admin";
    if (roleId === 2)
        return "User";
    if (roleId === 3)
        return "Collaborator";
    return "Guest";
}

export function isGrantedSpecificPermission(permissionList) {

}

export function isGrantedListPermission([listPermission]) {

}

export function logAllPermissionByRoleName(roleName) {
    if (roleName === "ROLE_ADMIN") {
        console.log(ROLE_ADMIN);
        return;
    }
    if (roleName === "ROLE_USER") {
        console.log(ROLE_USER);
        return;
    }
    if (roleName === "ROLE_COLLABORATOR") {
        console.log(ROLE_COLLABORATOR);
        return;
    }

}


//config:
export const ROLE_ADMIN = {
    ...PermissionList.AccountPermission.All,
    ...PermissionList.DocumentPermission.All,
    ...PermissionList.PostPermission.All,
    ...PermissionList.AccountPermission.All,
    ...PermissionList.CategoryPermission.All,
    ...PermissionList.RolePermission.All,
    ...PermissionList.UserPermission.All

}

export const ROLE_USER = {
    ...PermissionList.DocumentPermission.Upload,
    ...PermissionList.DocumentPermission.Download,
    ...PermissionList.AccountPermission.All,
    ...PermissionList.PostPermission.Comment,
    ...PermissionList.PostPermission.Save,
    ...PermissionList.PostPermission.Like,
    ...PermissionList.PostPermission.Create,
}

export const ROLE_COLLABORATOR = {
    ...PermissionList.DocumentPermission.Upload,
    ...PermissionList.DocumentPermission.Download,
    ...PermissionList.DocumentPermission.Approve,
    ...PermissionList.DocumentPermission.Preview,
    
    ...PermissionList.AccountPermission.All,

    ...PermissionList.PostPermission.Comment,
    ...PermissionList.PostPermission.Save,
    ...PermissionList.PostPermission.Like,
    ...PermissionList.PostPermission.Create,
    ...PermissionList.DocumentPermission.Approve,
    ...PermissionList.DocumentPermission.Preview,
} 
