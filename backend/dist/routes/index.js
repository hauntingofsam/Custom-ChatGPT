import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
const appRouter = Router();
appRouter.use("/api/user", userRoutes);
appRouter.use("/api/chat", chatRoutes);
export default appRouter;
//# sourceMappingURL=index.js.map