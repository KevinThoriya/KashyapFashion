import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, Typography } from "@mui/material";

export default function SBreadcrumb({ data }) {
  return (
    <div>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {data.map((step, index) => {
          if (step.length == index + 1)
            return (
              <p key="3" className="text-primary">
                {step.name}
              </p>
            );
          return (
            <Link underline="hover" key="2" color="GrayText" href={step.href}>
              {step.name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
