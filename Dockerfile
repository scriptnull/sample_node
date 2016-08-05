FROM scriptnull/debian:hasnodejs
ADD . .
CMD ["node", "job.js"]
