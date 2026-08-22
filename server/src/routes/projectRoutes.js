import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from "../controllers/projectController.js";
import { createTask } from "../controllers/taskController.js";
import {
  getProjectMembers,
  removeProjectMember,
  transferProjectOwnership,
  updateProjectMember,
} from "../controllers/projectMemberController.js";


const router = Router();

router
  .route("/")
  .get(getProjects)
  .post(createProject);
router.get(
  "/:projectId/members",
  getProjectMembers,
);

router.patch(
  "/:projectId/members/:userId",
  updateProjectMember,
);

router.delete(
  "/:projectId/members/:userId",
  removeProjectMember,
);

router.post(
  "/:projectId/transfer-ownership",
  transferProjectOwnership,
);


router.post("/:projectId/tasks", createTask);

router
  .route("/:projectId/invitations")
  .get(getProjectInvitations)
  .post(inviteProjectMember);

router.delete(
  "/:projectId/invitations/:invitationId",
  cancelProjectInvitation,
);

router
  .route("/:projectId")
  .get(getProject)
  .patch(updateProject)
  .delete(deleteProject);

export default router;

import {
  cancelProjectInvitation,
  getProjectInvitations,
  inviteProjectMember,
} from "../controllers/invitationController.js";

