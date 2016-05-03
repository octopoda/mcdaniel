<script src="/assets/scripts/dashboard/plugins/codemirror.js"></script>
<script src="/assets/scripts/dashboard/plugins/codemirror.mode.js"></script>
<script src="/assets/scripts/dashboard/plugins/redactor.codemirror.js"></script>
<script src="/assets/scripts/dashboard/plugins/redactor.video.js"></script>
<script src="/assets/scripts/dashboard/plugins/redactor.clips.js"></script>

<script>
$(function() {
    $('.redactor').redactor({
    	 plugins: ['codemirror', 'clips', 'video'],
    	  codemirror: {
            lineNumbers: true,
            mode: 'xml',
            indentUnit: 4
         },
         minHeight: 400,
    	 imageCaption:true,
    	 dragImageUpload: true,
    	 imageUpload: '/api/v1/imageUpload?_token=' + '{{ csrf_token() }}',
    	 imageUploadFields: '#my-field'
    });
 });
</script>
