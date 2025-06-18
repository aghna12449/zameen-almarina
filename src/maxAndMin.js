 const findMaximumAndMinimum = (zoneData) => {
          if (!zoneData || zoneData.length === 0) {
            return;
          }

          let maxArea = parseInt(zoneData[0].total_area);
          let minArea = parseInt(zoneData[0].total_area);

          for (let i = 0; i < zoneData.length; i++) {
            const currentArea = parseInt(zoneData[i].total_area);

            if (currentArea > maxArea) {
              maxArea = currentArea;
            }

            if (currentArea < minArea) {
              minArea = currentArea;
            }
          }

          console.log("Maximum totalArea:", maxArea);
          console.log("Minimum totalArea:", minArea);

          return { max: maxArea, min: minArea };
    };