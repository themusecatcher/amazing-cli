version=`cat package.json | grep version | awk -F \" '{print $4}'`
cnpm publish