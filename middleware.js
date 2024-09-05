import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/", // Home page
  "/workspace", // Example workspace page
  "/sign-in(.*)", // Sign-in pages
  "/sign-up(.*)", // Sign-up pages
  "/public/(.*)", // Allow all static files in the public folder
]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
