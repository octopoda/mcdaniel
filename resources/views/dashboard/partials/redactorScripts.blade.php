<script src="/assets/scripts/dashboard/plugins/redactor.source.js"></script>
<script src="/assets/scripts/dashboard/plugins/redactor.video.js"></script>
<script src="/assets/scripts/dashboard/plugins/redactor.clips.js"></script>

<script>
$(function() {
    $('.redactor').redactor({
    	 plugins: ['video', 'clips', 'source'],
    	 // multipleImageUpload: true,
    	 // imageCaption:true,
    	 dragImageUpload: true,
    	 imageUpload: '/api/v1/imageUpload?_token=' + '{{ csrf_token() }}',
    	 // buttons: ['format', 'bold', 'italic']
    });
 });
</script>
