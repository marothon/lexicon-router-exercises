import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}: {children: React.ReactNode}) {
  const [isProtected, _] = useState(false);

  return isProtected ? <Navigate to='/not-found' replace/> : children;
}
