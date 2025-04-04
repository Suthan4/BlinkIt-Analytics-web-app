import { ReactNode } from "react";
import { useCubeQuery } from "@cubejs-client/react";
import { Query, ResultSet } from "@cubejs-client/core";

interface QueryRendererProps {
  query?: Query;
  children?: (props: { resultSet: ResultSet }) => ReactNode;
  subscribe?: boolean;
}

export function QueryRenderer(props: QueryRendererProps) {
  const { children, query, subscribe } = props;
  const { resultSet, isLoading, error } = useCubeQuery(query ?? {}, {
    subscribe,
    skip: !query,
  });

  if (isLoading) {
    return (
      <>
        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((data, i) => (
            <div className="p-4 bg-white rounded-xl shadow-md w-[350px] h-[300px] animate-pulse">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="h-4 w-24 bg-gray-300 rounded"></div>
                <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              </div>

              {/* Main Number */}
              <div className="mt-3 h-8 w-16 bg-gray-300 rounded"></div>

              {/* Percentage and Last Month */}
              <div className="flex items-center mt-2 space-x-2">
                <div className="h-4 w-10 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>

              {/* Graph Lines */}
              <div className="mt-4 w-full bg-gray-200 rounded"></div>

              {/* Legend */}
              <div className="mt-2 flex justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                  <div className="h-3 w-12 bg-gray-300 rounded"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                  <div className="h-3 w-16 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (error) {
    return <>{error.toString()}</>;
  }

  if (!resultSet) {
    return <>Empty result set</>;
  }

  return children?.({ resultSet }) || null;
}
